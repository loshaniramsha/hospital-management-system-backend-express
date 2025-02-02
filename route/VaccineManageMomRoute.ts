import express from 'express';
import vaccineManageMom from "../module/VaccineManageMom"
import {VaccineManageMom} from "../database/VaccineManageMom";

const router = express.Router();
router.post("/add",async (req,res)=>{
    const vaccineManageMom:vaccineManageMom=req.body;
    try {
        const resul=await VaccineManageMom(vaccineManageMom);
        res.send(resul);
    }
    catch (e) {
        console.log("error")
        res.send(e);
    }
})
export default router;