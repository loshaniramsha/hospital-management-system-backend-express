import express from "express";
// @ts-ignore
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key"; // Use a secure key

export function authenticateToken(req: express.Request, res: express.Response, next: express.NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, SECRET_KEY, (err: any) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }
        next();
    });
}
