import express from 'express';
import { registerUser, getUserProfile } from '../controllers/userController.js';
import { userLogin } from '../controllers/loginUserController.js';
import { protect } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/register',registerUser);
router.post('/login',userLogin);
router.get('/profile', protect,getUserProfile);

export default router;