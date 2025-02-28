import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use cors middleware properly
app.use(cors({
    origin: "https://thurfr.vercel.app", // Allow requests from your frontend
    methods: "GET,POST,OPTIONS,PUT,PATCH,DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json()); // Parse JSON requests

// Basic route
app.get("/a", (req, res) => {
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

const MONGO_URL = "mongodb+srv://oumab743:makandabrian123@cluster0.qj7my.mongodb.net/Gessamu?retryWrites=true&w=majority&appName=Cluster0"

// MongoDB connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
