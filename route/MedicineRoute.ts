import express from "express";
import Medicine from "../module/Medicine";
import { MedicineAdd } from "../database/Medicine";

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
export default router;