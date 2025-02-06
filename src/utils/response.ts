import { Response } from "express";

export const response = {
    OK: {
        code: 200,
        status: 'success',
    },
    CREATED: {
        code: 201,
        status: 'success',
    },
    NO_CONTENT: {
        code: 204,
        status: 'success',
    },
    BAD_REQUEST: {
        code: 400,
        status: 'error',
    },
    UNAUTHORIZED: {
        code: 401,
        status: 'error',
    },
    FORBIDDEN: {
        code: 403,
        status: 'error',
    },
    NOT_FOUND: {
        code: 404,
        status: 'error',
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        status: 'error',
    },
};

export const sendResponse = (res: Response, statusCode: number, status: string, message: string, data: any = null) => {
    return res.status(statusCode).json({
        status,
        message,
        data,
    });
};