import express from "express";
import Vaccine from "../module/Vaccine";
import {VaccineAdd,DeleteVaccine,UpdateVaccine,GetAllVaccines,GetById} from "../database/Vaccine";


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

/*Delete Vaccine*/
router.delete("/delete/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await DeleteVaccine(id);
        res.send("Vaccine Deleted");
    }
    catch (err){
        console.log(err);

    }
})

/*Update vaccine*/
router.put("/update/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await UpdateVaccine(id,req.body);
        res.send("Updated Vaccine");
    }
    catch (err){
        console.log(err);
    }
})

/*Get All*/
router.get("/all",async (req,res)=>{
    try {
        const vaccine=await GetAllVaccines();
        res.send(vaccine);
    }
    catch (error){
        console.log(error);

    }
})

/*Get-By-Id*/
router.get("/view/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        const vaccine=await GetById(id);
        if (!vaccine){
            res.send("Not Found");
        }
        res.status(200).json(vaccine);
    }
    catch (error){
        console.log(error);
        res.status(400).json("")
    }
})
export default router;