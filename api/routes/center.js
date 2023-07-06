import express from "express"
import { createCenter } from "../controllers/CenterCtrl.js";

const router = express.Router();
// create
router.post("/",createCenter);
// // update
// router.put("/:id",updateCenter);
// // delete
// router.delete("/:id",deleteCenter);
// // get 
// router.get("/:id",getCenter);
// // get All Center
// router.get("/",getAllCenter);
export default router