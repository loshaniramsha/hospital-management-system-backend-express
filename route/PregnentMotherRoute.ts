import express from "express";
import {PregnantMotherAdd,DeleteMother,UpdateMother,GetAllMothers,GetById} from "../database/PregnentMother";
import PregnentMother from "../module/PregnentMothers"

const router=express.Router();
/*Save Mother*/
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

/*Delete Mother*/
router.delete("/delete/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await DeleteMother(id);
        res.send("Mother Removed Successfully");
    }catch (error){
        res.status(400).send(error)
    }
})

/*Update Mother*/
router.put("/update/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await UpdateMother(id,req.body);
        res.send("Updated Mother Successfully");
    }
    catch (error){
        res.status(400).send(error)
    }
})

/*GetAll*/
router.get("/all",async (req,res)=>{
    try {
        const mothers=await GetAllMothers();
        res.send(mothers);
    }
    catch (error){
        console.log(error);
        res.status(400).send(error)
    }

})
/*Get-By-Id*/
router.get("/view/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        const mother=await GetById(id);
        res.send(mother);
    }
    catch (error){
        console.log(error);
        res.status(400).send(error)
    }
})

export default router;