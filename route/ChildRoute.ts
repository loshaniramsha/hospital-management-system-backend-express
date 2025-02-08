import express from "express";
import Child from "../module/Child"
import {ChildAdd,DeleteChild,UpdateChild,GetAllChildren,GetById} from "../database/Child";

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

/*Get all child*/
router.get("/all",async (req, res) => {
    try {
        const child = await GetAllChildren();
        res.send(child);

    }
    catch (error){
        console.log(error);
    }

})

/*GetbyId*/
// @ts-ignore
router.get("/view/:id", async (req, res) => {
    const id: number = +req.params.id; // Convert to number

    try {
        const child = await GetById(id);

        if (!child) {
            return res.status(404).json({ message: "Child not found" });
        }

        res.status(200).json(child);
    } catch (error) {
        console.error("Error fetching child:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


export default router;