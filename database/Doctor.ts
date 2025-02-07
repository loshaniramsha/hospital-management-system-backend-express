import { PrismaClient } from "@prisma/client";
import Doctor from "../module/Doctor"

const prisma=new PrismaClient();
/*Save Doctor*/
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

/*Delete Doctor*/
export async function DeleteDoctor(doctor_id:number){
    try {
        const deleteDoctor=await prisma.doctor.delete({
            where:{
                doctor_id:doctor_id,
            },
        });
        console.log("deleteDoctor",deleteDoctor);
    }
    catch (error){
        console.log("error fetching data",error)
        throw error;
    }
}

/*Update Doctor*/
export async function UpdateDoctro(doctor_id:number,updateDoctor:Partial<Doctor>){
    try {
        const updateDoctors=await prisma.doctor.update({
            where:{
                doctor_id:doctor_id,
            },
            data:updateDoctor,
        });
        console.log("updateDoctor",updateDoctors);
    }
    catch (error){
        console.log("error fetching data",error)
        throw error;
    }
}
