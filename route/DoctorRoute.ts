import express from 'express';
import Doctor from "../module/Doctor"
import {DoctorAdd,DeleteDoctor,UpdateDoctro} from "../database/Doctor";

const router = express.Router();
/*Save Doctor*/
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

/*Delete Doctor*/
router.delete("/delete/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await DeleteDoctor(id)
        res.send("Doctor Deleted");
    }
    catch (error){
        console.log(error);
    }

})

/*Update Doctor*/
router.put("/update/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await UpdateDoctro(id,req.body);
        res.send("Updated Doctor");
    }
    catch (error){
        res.status(400).send(error)
    }
})
export default router;