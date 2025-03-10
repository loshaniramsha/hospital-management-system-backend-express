import { PrismaClient } from "@prisma/client";
import Medicine from "../module/Medicine";

const prisma=new PrismaClient();
/*Save Medicine*/
export async function MedicineAdd(medicine:Medicine){
    try {
        const newMedicine=await prisma.medicine.create({
            data:{
                name:medicine.name,
                batch_number:medicine.batch_number,
                brand:medicine.brand,
                qty:medicine.qty,
                date:medicine.date
            }
        })
        console.log("Medicine Added Successfully",newMedicine)
    }
    catch (err){
        console.log("error fetching data",err)
        throw err;
    }
}

/*Delete Medicine*/
export async function DeleteMedicine(medi_id:number){
    try {
        const deleteMedicine=await prisma.medicine.delete({
            where:{
                medicine_id:medi_id,
            },
        });
        console.log("medicine delete",deleteMedicine)
    }
    catch (error){
        console.log("error delete medicine",error)
        throw error;
    }
}

/*Update Medicine*/
export async function UpdateMedicine(medi_id:number,updateMedicine:Partial<Medicine>){
    try {
        const newMedicine=await prisma.medicine.update({
            where:{
                medicine_id:medi_id,
            },
            data:updateMedicine,
        });
        console.log("updateMedicine",newMedicine);
    }
    catch (error){
        console.log("error updateMedicine",error)
        throw error;
    }
}
/*Get All*/
export async function GetAllMedicines(){
    try {
        return await prisma.medicine.findMany();
    }
    catch (error){
        console.log("error getAllMedicines",error);
        throw error;
    }
}
/*Get-By-Id*/
export async function GetById(medi_id:number){
    try {
        const medi=await prisma.medicine.findUnique({
            where:{
                medicine_id:medi_id,
            },
        });
        if (medi==null){
            console.log("no medicine",medi);
            return null;
        }
    }
    catch (error){
        console.log("error getById",error);
        throw error;
    }
}