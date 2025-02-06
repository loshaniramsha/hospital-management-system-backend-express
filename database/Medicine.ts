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