import User from "../models/User";
import bcrypt from 'bcryptjs';

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    }catch (err){
        console.log(err);
    }
    if(!users) {
        return res.status(404).json({message: 'User not found' });
    }
    return res.status(200).json({users})
};

export const register = async (req, res, next) => {
    const {name,email,password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({ email })
    }catch(err) {
        return console.log(err)
    }
    if(existingUser) {
        return res.status(400).json({ message: 'User already registered' });
    }
    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
    });
    
    try {
        await user.save();
    }catch(err) {
        console.log(err);
    }
    return res.status(201).json({user});
};