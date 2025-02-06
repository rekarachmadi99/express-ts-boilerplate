import { Optional } from "sequelize";

export interface UserAttributes {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    isVerifyEmail?: boolean;
    refreshToken?: string;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }
