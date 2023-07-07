import mongoose from "mongoose";
const CenterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
   capacity:{
    type: Number,
    required: true
   },
   availableDate:[
    {  availableCapacity:{
            type:Number,
            default: function() {
                return ` ${this.capacity}`;
              }
        }, 
        DateAvl:{
            type:Date
        }
    }
   ],
    price:{
        type:Number,
        required:true
    },
    landmark:{
        type:String
    },
    workingHr:
    {
        type: String,
        default:"9:00 - 5:00"
    }
})
export default mongoose.model("Center", CenterSchema);