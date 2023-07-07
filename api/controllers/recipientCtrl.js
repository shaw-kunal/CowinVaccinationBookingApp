import Recipient from "../model/Recipient.js";

export const registerRecipient= async(req,res,next)=>{
    console.log("registerRecipient1")
    const newRecipient = new Recipient(req.body);
    try {
        
        const savedrecipient = await newRecipient.save();
        console.log("registerRecipient2")
        res.status(200).json(savedrecipient);
        console.log("new Recipeient saved")
    } catch (error) {
        next(error)
        
    }
}

export const updateRecipient= async(req,res,next)=>{
    try {
        const updateRecipient = await Recipient.findByIdAndUpdate(req.params.id,
            {$set:req.body},{new:true});
            res.status(200).json(updateRecipient);
        
    } catch (error) {
        next(error)
        
    }
}

export const deleteRecipient= async(req,res,next)=>{
    try {
        await Recipient.findByIdAndDelete(req.params.id);
        res.status(200).json("Succesfully Detelted");
    } catch (error) {
        console.log(error)
        next(error)
        
    }
}

export const getRecipient= async(req,res,next)=>{
    try {
     const recipient=   await Recipient.findById(req.params.id);
        res.status(200).json(recipient);
    } catch (error) {
        next(error)   
    }
}

export const getAllRecipient= async(req,res,next)=>{
    try {
        const data = await Recipient.find();
        res.status(200).json(data);

    
    } catch (error) {
        next(error)
        
    }
}




