import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import { response, sendResponse } from '@/utils/response';

export const register = async (req: Request, res: Response): Promise<Response | any> => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return sendResponse(res, response.BAD_REQUEST.code, response.BAD_REQUEST.status, "Username, email dan password tidak boleh kosong.");
  }

  try {
    const user = await registerUser(username, email, password);
    return sendResponse(res, response.CREATED.code, response.CREATED.status, "Berhasil membuat akun baru.", user);
  } catch (error: any) {
    console.error(error);

    if (error.message.includes('Email telah digunakan')) {
      return sendResponse(res, response.BAD_REQUEST.code, response.BAD_REQUEST.status, error.message);
    }

    return sendResponse(res, response.INTERNAL_SERVER_ERROR.code, response.INTERNAL_SERVER_ERROR.status, error.message);
  }
};

export const login = async (req: Request, res: Response): Promise<Response | any> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendResponse(res, response.BAD_REQUEST.code, response.BAD_REQUEST.status, "Email dan password tidak boleh kosong.");
  }

  try {
    const token = await loginUser(email, password);
    return sendResponse(res, response.OK.code, response.OK.status, "Berhasil melakukan login.", { token });
  } catch (error: any) {
    console.error(error);

    if (error.message.includes('Email dan password yang anda masukan salah.')) {
      return sendResponse(res, response.UNAUTHORIZED.code, response.UNAUTHORIZED.status, error.message);
    }

    return sendResponse(res, response.INTERNAL_SERVER_ERROR.code, response.INTERNAL_SERVER_ERROR.status, error.message);
  }
};
