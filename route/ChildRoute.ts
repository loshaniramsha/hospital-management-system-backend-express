import express from "express";
import Child from "../module/Child"
import {ChildAdd} from "../database/Child";

const router=express.Router();
router.post("/add",async (req,res)=>{
    const child:Child=req.body;
    try {
        const addChild=await ChildAdd(child);
        res.send(addChild);
    }
    catch (err){
        console.log(err);
        res.status(400).send({err:err})
    }
})
export default router;