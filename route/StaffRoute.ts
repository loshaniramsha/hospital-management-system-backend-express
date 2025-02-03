import express from 'express';
import Staff from "../module/Staff"
import {AddStaff} from "../database/Staff";

const router = express.Router();
router.post("/add",async (req,res)=>{
    const staff:Staff=req.body;
    try {
        const addStaff=await AddStaff(staff);
        res.send(addStaff);
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
})
export default router;