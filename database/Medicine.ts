import { PrismaClient } from "@prisma/client";
import Medicine from "../module/Medicine";

const prisma=new PrismaClient();

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