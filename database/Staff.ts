import { PrismaClient } from "@prisma/client";
import Staff from "../module/Staff"

const prisma=new PrismaClient();
/*Save Staff*/
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

/*Delete Staff*/
export async function DeleteStaff(staff_id:number){
    try {
        const deleteStaff=await prisma.staff.delete({
            where:{
                staff_id:staff_id,
            },
        });
        console.log("deleteStaff",deleteStaff);
    }
    catch(err){
        console.log("Error delete staff",err)
    }
}