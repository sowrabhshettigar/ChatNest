import User from '../models/userModel.js';
export const registerUser = async (req, res) => {
    const {name,email,password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({name,email,password });

    if (user) {
        return res.status(201).json(user);
    } else {
        return res.status(400).json({ message: 'Invalid user data' });
    }
};
