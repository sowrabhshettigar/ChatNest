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
            return res.status(400).json({message:'Invalid User Data'});
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch)
        {
            return res.status(400).json({message: 'Invalid Password'});
        }

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});

        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token,
        });

    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}