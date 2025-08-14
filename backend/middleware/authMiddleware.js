import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect= async (req, res, next) =>{
    let token;
    
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    )
    {
        try{
            token=req.headers.authorization.split(' ')[1];

            const decoded=jwt.verify(token, process.env.JWT_SECRET);
        }
    }