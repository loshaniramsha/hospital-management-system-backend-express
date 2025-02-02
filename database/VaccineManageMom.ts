import { PrismaClient } from "@prisma/client";
import VaccineManageMomEntity from "../module/VaccineManageMom";

const prisma = new PrismaClient();

export async function VaccineManageMom(vaccineManageMother: VaccineManageMomEntity) {
    try {
        // @ts-ignore
        const formattedDate = new Date(vaccineManageMother.date);
        const result = await prisma.$transaction([
            // Step 1: Insert record into VaccineManageMothers table
            prisma.vaccineManageMothers.create({
                data: {
                    mother_id: vaccineManageMother.mother_id,
                    vaccine_id: vaccineManageMother.vaccine_id,
                    reason: vaccineManageMother.reason,
                    date:formattedDate, // Ensure date is in proper format
                },
            }),

            // Step 2: Update vaccine quantity (decrement by 1)
            prisma.vaccine.update({
                where: { vaccine_id: vaccineManageMother.vaccine_id },
                data: {
                    qty: {
                        decrement: 1, // Reduce vaccine quantity by 1
                    },
                },
            }),
        ]);

        console.log("Transaction Successful:", result);
        return result;
    } catch (err) {
        console.error("Transaction Failed:", err);
        throw err; // Ensure error is propagated
    }
}
