import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
// @ts-ignore
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = "your_secret_key"; // 🔒 Replace with an actual secure key

// ✅ Register User
export async function registerUser(user: { user_name: string; password: string; email: string }) {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = await prisma.user.create({
            data: {
                user_name: user.user_name,
                email: user.email,
                password: hashedPassword, // Store hashed password
            },
        });

        console.log("User registered successfully:", newUser);
        return { success: true, message: "User registered successfully", newUser };
    } catch (error) {
        console.error("Error registering user:", error);
        return { success: false, message: "Error registering user" };
    }
}

// ✅ Verify User (Login)
export async function verifyUser(user: { user_name: string; password: string }) {
    try {
        const existingUser = await prisma.user.findUnique({
            where: { user_name: user.user_name },
        });

        if (!existingUser) {
            console.log("User not found");
            return { success: false, message: "User not found" };
        }

        const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);

        if (!isPasswordValid) {
            console.log("Incorrect password");
            return { success: false, message: "Incorrect password" };
        }

        // ✅ Generate JWT Token
        const token = jwt.sign(
            { user_id: existingUser.user_id, user_name: existingUser.user_name },
            SECRET_KEY,
            { expiresIn: "1h" } // Token expires in 1 hour
        );

        console.log("User verified successfully");
        return { success: true, message: "Login successful", token };
    } catch (error) {
        console.error("Error verifying user:", error);
        return { success: false, message: "Error verifying user" };
    }
}









/*
import { PrismaClient } from "@prisma/client";
import User from "../module/User";
// @ts-ignore
import bcrypt from "bcrypt";

const prisma=new PrismaClient();
export async function registerUser(user: { password: any; user_name: any; email: any }){
    try {
        const hashpassword=await bcrypt.hash(user.password,10);
        const newUser=await prisma.user.create({
            data:{
                user_name:user.user_name,
                email:user.email,
                password:user.password
            }
        })
        console.log("user registered",newUser);
        return newUser;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export async function verifyUser(verifyUser: { password: any; user_name: any; email: any }) {
    try {
        // Find user by user_name and email
        const user = await prisma.user.findUnique({
            where: { user_name: verifyUser.user_name },
        });

        if (!user) {
            console.log("User not found");
            return { success: false, message: "User not found" };
        }

        // Compare the hashed password with the entered password
        const isPasswordValid = await bcrypt.compare(verifyUser.password, user.password);

        if (!isPasswordValid) {
            console.log("Incorrect password");
            return { success: false, message: "Incorrect password" };
        }

        console.log("User verified successfully:", user);
        return { success: true, message: "User verified successfully", user };
    } catch (error) {
        console.error("Error verifying user:", error);
        throw error;
    }
}*/
