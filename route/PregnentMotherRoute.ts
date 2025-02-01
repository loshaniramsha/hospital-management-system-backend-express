import express from "express";
import {PregnantMotherAdd} from "../database/PregnentMother";
import PregnentMother from "../module/PregnentMothers"

const router=express.Router();
router.post("/add",async (req,res)=>{
    const mothers:PregnentMother=req.body;
    try {
        const addMother=await PregnantMotherAdd(mothers);
        res.send("Mother Added Successfully");
    }
    catch (err){
        console.log("error fetching data",err)
        throw err;
    }
})
export default router;