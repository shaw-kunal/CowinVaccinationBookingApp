import express from "express"
import { deleteRecipient, getAllRecipient, getRecipient, registerRecipient, updateRecipient } from "../controllers/recipientCtrl.js";

const router = express.Router();
// register recipient
router.post("/",registerRecipient);
// update 
router.put("/:id",updateRecipient);
// delete
router.delete("/:id",deleteRecipient);
// get Recipient
router.get("/:id",getRecipient);

//get all recipient
router.get("/",getAllRecipient);


export default router