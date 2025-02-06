import { Router } from 'express';
import authentication from './authenticationRoute'
const router = Router();

router.use('/api', authentication);

export default router;
