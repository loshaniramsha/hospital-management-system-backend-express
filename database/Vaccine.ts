import { PrismaClient } from "@prisma/client";
import Vaccine from "../module/Vaccine";

const prisma=new PrismaClient();
export async function VaccineAdd(vaccine:Vaccine){
    try {
        const newVaccine=await prisma.vaccine.create({
            data:{
                name:vaccine.name,
                batch_number:vaccine.batch_number,
                brand:vaccine.brand,
                qty:vaccine.qty,
                date:vaccine.date
            }
        })
        console.log("Vaccine Added Successfully",newVaccine)
    }
    catch(err){
        console.log("error fetching data",err)
        throw err;
    }
}