import express from "express";
import Vaccine from "../module/Vaccine";
import {VaccineAdd,DeleteVaccine,UpdateVaccine} from "../database/Vaccine";


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
export default router;