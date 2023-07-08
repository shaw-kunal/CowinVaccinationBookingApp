import express from "express"
import { deleteUser, getAlleUser, getUser, updateUser } from "../controllers/userCtrl.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// update user
router.put("/:id",updateUser);
// delete user 
router.delete("/:id",deleteUser);
// get single user
router.get("/:id",getUser);
// get all user
router.get("/",getAlleUser);


export default router