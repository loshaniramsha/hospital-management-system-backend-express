import express from "express";
import Medicine from "../module/Medicine";
import { MedicineAdd,DeleteMedicine,UpdateMedicine,GetAllMedicines,GetById } from "../database/Medicine";

const router = express.Router();
/*Save Medicine*/
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

/*Delete Medicine*/
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

/*Update Medicine*/
router.put("/update/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        await UpdateMedicine(id,req.body);
        res.send("Updated Medicine");
    }
    catch (error){
        console.log("error fetching data",error)
    }
})

/*Get All*/
router.get("/all",async (req,res)=>{
    try {
        const medicine=await GetAllMedicines();
        res.send(medicine);
    }
    catch (error){
        console.log("error fetching data",error)
    }

})

/*GetById*/
router.get("/view/:id",async (req,res)=>{
    const id:number=+req.params.id;
    try {
        const medi=await GetById(id);
        if(!medi){
            res.send("Not Found");

        }
        res.status(200).json(medi);
    }
    catch (error){
        console.log("error fetching data",error);
        res.status(500).send({error:error});
    }
})
export default router;