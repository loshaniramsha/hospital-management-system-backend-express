import express from "express";
import Vaccine from "../module/Vaccine";
import {VaccineAdd} from "../database/Vaccine";

const router=express.Router();
router.post("/add",async (req,res)=>{
    const vaccine:Vaccine=req.body;
    try {
        const newVaccine=await VaccineAdd(vaccine);
        res.send(newVaccine);
    }
    catch (err){
        console.log(err);
        res.send(err);
    }
});
export default router;