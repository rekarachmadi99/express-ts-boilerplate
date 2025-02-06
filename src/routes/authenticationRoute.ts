
import { login, register } from '@/modules/auth/controllers/authController';
import { Router } from 'express';

const router = Router();

router.post('/login', login);
router.post('/register', register);

export default router;
