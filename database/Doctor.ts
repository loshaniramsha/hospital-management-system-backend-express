import { PrismaClient } from "@prisma/client";
import Doctor from "../module/Doctor"

const prisma=new PrismaClient();

export async function DoctorAdd(doctor:Doctor){
    try {
        const newDoctor=await prisma.doctor.create({
            data:{
                doctor_name:doctor.doctor_name,
                doctor_register_number:doctor.doctor_register_number,
                doctor_position:doctor.doctor_position,
                contact:doctor.contact,
                email:doctor.email
            }
        })
        console.log("Doctor Added Successfully",newDoctor)
        return newDoctor
    }
    catch(err){
        console.log("error fetching data",err)
        throw err;
    }
}
