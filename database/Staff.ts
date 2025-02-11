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
/*Update Staff*/
export async function UpdateStaff(staff_id:number,updateStaf:Partial<Staff>){
    try {
        const updatestaff=await prisma.staff.update({
            where:{
                staff_id:staff_id,
            },
            data:updateStaf,
        })
        console.log("update staff",updatestaff);
    }
    catch (error){
        console.log(error)

    }
}

/*Get All*/
export async function GetAllStaff(){
    try {
        return await prisma.staff.findMany();

    }
    catch(err){
        console.error("Error getAllStaff",err);
        throw err;
    }
}

/*Get-By-Id*/
export async function GetById(id:number){
    try {
        const staff=await prisma.staff.findUnique({
            where:{
                staff_id:id,
            },
        });
        if (staff==null){
            console.log("no staff",staff);
            return null
        }
        console.log("Staff found",staff);
        return staff;
    }
    catch(err){
        console.error("Error getAllStaff",err);
        throw err;
    }
}