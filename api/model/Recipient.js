import mongoose from "mongoose";
const RecipientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,  
    },
    Dob:{
        type:Number,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,
    },
    aadhar:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    }
    ,
    vaccine:{
        type:String,
        required:true
    },
    DoseNo:{
        type:String,
        required:true
    },
    CenterId:{
        type:String

    }
},
{timestamps:true}

);
export default mongoose.model("Recipient",RecipientSchema)