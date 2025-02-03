import { PrismaClient } from "@prisma/client";
import Child from "../module/Child";

const prisma=new PrismaClient();

export async function ChildAdd(child:Child){
    try {
        const newChild=await prisma.children.create({
            data:{
                child_name:child.child_name,
                mother_name:child.mother_name,
                contact:child.contact,
                address:child.address,
                age:child.age,
                vaccine_status:child.vaccine_status,
                doctor_id:child.doctor_id,
                staff_id:child.staff_id
            }
        })
        console.log("Child Added Successfully",newChild)

    }
    catch(err){
        console.log("error fetching data",err)
        throw err;
    }
}