import { PrismaClient } from "@prisma/client";
import Mothers from "../module/PregnentMothers"

const prisma=new PrismaClient();
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