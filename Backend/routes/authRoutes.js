const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user');

const router=express.Router();

router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'User already exists'});
        }
        user=new User({name,email,password});
        await user.save();

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});

        res.status(201).json({token,user:{id:user._id,name:user.name,email:user.email}});
    }catch(err){
        console.error(err.message);
        res.status(500).json({mssg:'Server error'});
    }
}
);
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'Invalid Email'});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Invalid Password'});
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(201).json({token,user:{id:user._id,name:user.name,email:user.email}});
    }catch(err){
        console.error(err.message);
        res.status(500).json({mssg:'Server error'});
    }
}
);
module.exports=router;










