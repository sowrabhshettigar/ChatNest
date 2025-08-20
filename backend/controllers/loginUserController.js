import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const userLogin = async (req, res) => {
    try
    {
        const {email,password}=req.body;

        if(!email || !password)
        {
            return res.status(400).json({message: 'Please fill all fields'});
        }

        const user= await User.findOne({ email });

        if(!user)
        {
            return res.status(400).json({message:'Invalid Email or Password'});
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch)
        {
            return res.status(400).json({message: 'Invalid Email or Password'});
        }


        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id)
        });

    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}


export const getUserProfile = async (req, res) => {
    res.status(200).json(req.user);
};