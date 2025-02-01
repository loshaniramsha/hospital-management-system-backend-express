import express from 'express';
import Doctor from "../module/Doctor"
import {DoctorAdd} from "../database/Doctor";

const router = express.Router();
router.post("/add",async (req,res)=>{
    const Doctoctor:Doctor=req.body
    try {
        const addDoctor=await DoctorAdd(Doctoctor);
        res.send(addDoctor)
    }
    catch (error) {
        res.status(400).send(error)
    }
})
export default router;