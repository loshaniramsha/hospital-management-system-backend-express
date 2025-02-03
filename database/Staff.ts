import { PrismaClient } from "@prisma/client";
import Staff from "../module/Staff"

const prisma=new PrismaClient();
export async function AddStaff(staff:Staff){
    try {
        const newStaff=await prisma.staff.create({
            data:{
                profile:staff.profile,
                name:staff.name,
                contact:staff.contact,
                address:staff.address,
                role:staff.role,

            }
        })
        console.log("Staff Added Successfully")
    }
    catch (error) {
        console.log(error)
    }
}