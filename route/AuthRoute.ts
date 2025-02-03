import express from "express";
import { registerUser, verifyUser } from "../database/User";
import { authenticateToken } from "../Authentication/Authentication";

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
    try {
        const { user_name, password, email } = req.body;
        const newUser = await registerUser({ user_name, password, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: "Registration failed" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    try {
        const { user_name, password } = req.body;
        const result = await verifyUser({ user_name, password });

        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(401).json(result);
        }
    } catch (error) {
        res.status(400).json({ error: "Login failed" });
    }
});

// Protected Route (Example)
// @ts-ignore
router.get("/protected", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Access granted!"});
});

export default router;
