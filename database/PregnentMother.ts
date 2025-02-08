import { PrismaClient } from "@prisma/client";
import Mothers from "../module/PregnentMothers"

const prisma=new PrismaClient();
/*Save Mother*/
export async function PregnantMotherAdd(mother:Mothers){
    try {
        const newMother=await prisma.pregnantMother.create({
            data:{
                mother_name:mother.mother_name,
                mother_age:mother.mother_age,
                mother_address:mother.mother_address,
                contact:mother.contact,
                gravidity:mother.gravidity,
                register_date:mother.register_date,
                delivery_date:mother.delivery_date,
                clinic_date:mother.clinic_date,
                doctor_id:mother.doctor_id,
                staff_id:mother.staff_id,
            }
        })
        console.log("Mother Added Successfully",newMother)
    }
    catch(err){
        console.log("error fetching data",err)
        throw err;
    }
}

/*Delete Mother*/
export async function DeleteMother(mother_id:number){
    try {
        const deleteMother=await prisma.pregnantMother.delete({
            where:{
                mother_id:mother_id
            },
        });
        console.log("deleteMother",deleteMother);
    }
    catch(err){
        console.log("error delete mother",err)
        throw err;
    }
}

/*Update Mother*/
export async function UpdateMother(mother_id:number,updateMom:Partial<Mothers>){
    try {
        const updatemother=await prisma.pregnantMother.update({
            where:{
                mother_id:mother_id,
            },
            data:updateMom,
        });
        console.log("Mother Updated",updatemother);
    }
    catch (error){
        console.log("error updating mother",error)
        throw error;
    }
}