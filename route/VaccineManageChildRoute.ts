import express from "express";
import VaccineManage from"../module/VaccineManageChild"
import {VaccineManageChild} from "../database/VaccineManageChild";

const router=express.Router();
router.post("/add",async (req,res)=> {
    const {child_id, vaccine_id, reason, date} = req.body;
    try {
        const result = await VaccineManageChild(child_id, vaccine_id, reason, date);
        res.status(200).json({message: "Vaccine managed successfully", data: result});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({error: "Failed to manage vaccine"});
    }
});
export default router;
