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

/*Update Vaccine*/
export async function UpdateVaccine(vaccine_id:number,updateVaccine:Partial<Vaccine>){
    try {
        const updatevaccine=await prisma.vaccine.update({
            where:{
                vaccine_id:vaccine_id,
            },
            data:updateVaccine,
        });
        console.log("Update Vaccine",updatevaccine);
    }
    catch (error){
        console.log("error updating Vaccine",error)
        throw error;
    }
}

/*Get All*/
export async function GetAllVaccines(){
    try {
        return await prisma.vaccine.findMany()

    }
    catch (error){
        console.log("error getAllVaccines",error);
        throw error;
    }
}

/*Get-By-Id*/
export async function GetById(id:number){
    try {
        const vaccine=await prisma.vaccine.findUnique({
            where:{
                vaccine_id:id,
            },
        });
        if (!vaccine===null){
            console.log("no vaccine",vaccine);
            return null
        }
        console.log("Vaccine",vaccine);
        return vaccine;
    }
    catch (error){
        console.log("error getAllVaccines",error);
        throw error;
    }
}