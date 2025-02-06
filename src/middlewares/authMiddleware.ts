import { User } from '@/models';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '@/config/config';
import { UserAttributes } from '@/models/user/user.type';

declare global {
    namespace Express {
        interface Request {
            user?: UserAttributes;
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Token tidak ditemukan' });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret) as { userId: number, role: string };
        const user = await User.findByPk(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: 'Pengguna tidak ditemukan' });
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token tidak valid' });
    }
};

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.user?.role;

        if (!userRole || !roles.includes(userRole)) {
            return res.status(403).json({ message: 'Akses ditolak, role tidak memadai' });
        }

        next();
    };
};
