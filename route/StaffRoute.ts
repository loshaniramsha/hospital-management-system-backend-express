import express from 'express';
import Staff from "../module/Staff"
import {AddStaff,DeleteStaff,UpdateStaff} from "../database/Staff";
import e from "express";

const router = express.Router();
/*Save Staff*/
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

/*Delete Staff*/
router.delete("/delete/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await DeleteStaff(id);
        res.send("Staff Deleted");

    }
    catch (error){
        console.log(error);
        res.send(e);
    }
})

/*Update Staff*/
router.put("/update/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await UpdateStaff(id,req.body);
        res.send("Updated Updated Staff");
    }
    catch (error){
        console.log(error);
        res.send(e);
        throw error;
    }
})
export default router;