import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function VaccineManageChild(
    child_id: number,
    vaccine_id: number,
    reason: string,
    date: string // Keeping as string for now, will convert to Date
) {
    try {
        // Convert date string to a Date object
        const formattedDate = new Date(date);

        // Use Prisma transaction to ensure atomicity
        const result = await prisma.$transaction([
            // Step 1: Add a record in VaccineManageChildren table
            prisma.vaccineManageChildren.create({
                data: {
                    child_id: child_id,
                    vaccine_id: vaccine_id,
                    reason: reason,
                    date: formattedDate,
                },
            }),

            // Step 2: Update the vaccine quantity (decrement by 1)
            prisma.vaccine.update({
                where: { vaccine_id: vaccine_id },
                data: {
                    qty: {
                        decrement: 1, // Reduce vaccine quantity by 1
                    },
                },
            }),

            // Step 3: Update the child's vaccine status to "DONE"
            prisma.children.update({
                where: { child_id: child_id },
                data: {
                    vaccine_status: "DONE",
                },
            }),
        ]);

        console.log("Transaction Successful:", result);
        return result;
    } catch (err) {
        console.error("Transaction Failed:", err);
        throw err; // Ensure error is propagated to be handled by the calling function
    }
}
