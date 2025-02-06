import express from "express";
import Child from "../module/Child"
import {ChildAdd,DeleteChild} from "../database/Child";

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
/*Delete Child*/
router.delete("/delete/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await DeleteChild(id);
        res.send("Child Deleted");
    }
    catch (e){
        console.log("Not Success Child Delete",e);
    }
})
export default router;