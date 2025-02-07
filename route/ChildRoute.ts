import express from "express";
import Child from "../module/Child"
import {ChildAdd,DeleteChild,UpdateChild} from "../database/Child";

const router=express.Router();
/*Save Child*/
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
/*Updated Child*/
router.put("/update/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await UpdateChild(id,req.body);
        res.send("Updated Child");
    }
    catch (e){
        console.log("Not Updated Child",e);
        throw e;
    }

})
export default router;