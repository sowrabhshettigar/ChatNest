import express from 'express';
import { registerUser } from '../controllers/UserController';

const router=express.Router();

router.post('/register',registerUser);

export default router;