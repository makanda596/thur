import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to the backend server!");
});

// Simple login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Dummy user credentials
    const user = { username: "admin", password: "password123" };

    if (username === user.username && password === user.password) {
        res.json({ message: "Login successful", status: "success" });
    } else {
        res.status(401).json({ message: "Invalid credentials", status: "error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('Server running on port 5000');
});
