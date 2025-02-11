import express from 'express';
import Staff from "../module/Staff"
import {AddStaff,DeleteStaff,UpdateStaff,GetAllStaff,GetById} from "../database/Staff";
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

/*Get all*/
router.get("/all",async (req,res)=>{
    try {
        const staff=await GetAllStaff();
        res.send(staff);
    }
    catch (error){
        console.log(error);
    }
})

/*Get-By-Id*/
// @ts-ignore
router.get("/view/:id",async (req,res)=>{
    const id: number = +req.params.id;  // Convert ID to number

    try {
        const staff = await GetById(id);

        if (!staff) {
            return res.status(404).json({ message: "Staff not found" }); // Handle not found case
        }

        res.status(200).json(staff); // Send the retrieved staff data
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Internal server error" }); // Send error response
    }
});

export default router;