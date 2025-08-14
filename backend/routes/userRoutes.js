import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { userLogin } from '../controllers/loginUserController.js';

const router=express.Router();

router.post('/register',registerUser);
router.post('/login',userLogin);

export default router;