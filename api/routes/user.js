import express from "express"
import { deleteUser, getAlleUser, getUser, updateUser } from "../controllers/userCtrl.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// update user
router.put("/:id",verifyUser,updateUser);
// delete user 
router.delete("/:id",verifyUser,deleteUser);
// get single user
router.get("/:id",verifyUser,getUser);
// get all user
router.get("/",getAlleUser);


export default router