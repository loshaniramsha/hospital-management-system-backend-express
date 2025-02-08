import { PrismaClient } from "@prisma/client";
import Child from "../module/Child";

const prisma=new PrismaClient();
/*Save Children*/
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
/*Delete Child*/
export async function DeleteChild(child_id:number){
    try {
        const deleteChild=await prisma.children.delete({
            where:{
                child_id:child_id,
            },
        });
        console.log("deleteChild",deleteChild);
    }
    catch(err){
        console.log("error fetching data",err)
        throw err;
    }
}
/*Update Child*/
export async function UpdateChild(child_id:number,updatedChild:Partial<Child>){
    try {
        const updateChild=await prisma.children.update({
            where:{
                child_id:child_id,
            },
            data:updatedChild,
        });
        console.log("updateChild",updateChild);
    }
    catch (error){
        console.error("Child Updated Error",error)
        throw error;
    }
}
/*Get all*/
export async function GetAllChildren(){
    try {
        return await prisma.children.findMany();
    }
    catch(err){
        console.log("error fetching data",err)
        throw err;
    }
}