import mongoose from "mongoose";
import User from "../model/User.js";

export const updateUser =  async(req,res, next)=>{
    try {
        console.log("updateUser")
        const updateUser = await User.findByIdAndUpdate(req.params.id,
            {$set:req.body},{new:true});
                res.status(200).json(updateUser);
                
    } catch (error) {
        next(error)
    }   
}
export const deleteUser =  async(req,res, next)=>{
    try {
        console.log("delete user")
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been Deleted");
    } catch (error) {
        next(error);
    }
}
export const getUser =  async(req,res, next)=>{
    try {
        console.log("getuser")
        const user = await User.findById(req.params.id);
        const {password, createdAt,updatedAt,isAdmin,...other} = user._doc;

        res.status(200).json({...other});
    } catch (error) {
        next(error);   
    }
}

export const getAlleUser =  async(req,res, next)=>{
    try {
        const users= await User.find();
        const newUser = users.map((u)=>{
            const {password, createdAt,updatedAt,isAdmin,__V,...others} = u._doc;
            return others;
        })

        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }
}