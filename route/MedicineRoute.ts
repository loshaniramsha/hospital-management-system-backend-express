import express from "express";
import Medicine from "../module/Medicine";
import { MedicineAdd,DeleteMedicine } from "../database/Medicine";

const router = express.Router();
router.post("/add", async (req, res) => {
    const medicine:Medicine=req.body;
    try {
        const newMedicine=await MedicineAdd(medicine);
        res.send(newMedicine);
    }
    catch(err){
        console.log("error fetching data",err)
        res.status(500).send({error:err});
    }
})

router.delete("delete/:id",async (req,res)=>{
    // @ts-ignore
    const id:number=req.params.id;
    try {
        await DeleteMedicine(id);
        res.send("Child Deleted");
    }
    catch (error){
        console.log("error fetching data",error)
    }
})
export default router;