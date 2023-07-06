import Center from "../model/Center.js";

export const createCenter = async (req, res, next) => {
    const newCenter = new Center(req.body);
    try {
        const savedCenter = await newCenter.save();
        res.status(200).json(savedCenter);
        console.log("new center saved");
    } catch (error) {
        next(error)
    }
}

// update center
export const updateCenter = async (req, res, next) => {
    try {
        const updateCenter = await Center.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateCenter);
    } catch (error) {
        next(error)
    }
}

// delete Center
export const deleteCenter = async (req, res, next) => {
    try {
        await Center.findByIdAndDelete(req.params.id)
        res.status(200).json("Center has Been Deleted Succesfully");
    } catch (error) {
        next(error);
    }
}

// get Center By id
export const getCenter = async(req,res,next)=>{
    try {
        const center = await Center.findById(req.params.id);
        res.status(200).json(center);
    } catch (error) {
        next(error);
    }
}
// get all Center 
export const getAllCenter = async(req,res,next)=>{
    try {
        const centers = await Center.find();
        res.status(200).json(centers);
    } catch (error) {
        next(error);  
    }
}
