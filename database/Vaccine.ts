import { PrismaClient } from "@prisma/client";
import Vaccine from "../module/Vaccine";

const prisma=new PrismaClient();
/*Save Vaccine*/
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

/*Delete Vaccine*/
export async function DeleteVaccine(vaccine_id:number){
    try {
        const deleteVaccine = await prisma.vaccine.delete({
            where:{
                vaccine_id:vaccine_id
            },
        });
        console.log("DeleteVaccine",deleteVaccine);
    }
    catch(err){
        console.log("error delete delete",err)
        throw err;
    }
}