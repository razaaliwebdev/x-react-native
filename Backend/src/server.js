import express from 'express';
import cors from "cors";
import { clerkMiddleware } from '@clerk/express';
import userRoutes from './routes/useRoute.js';

import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();



// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());


// Routes 
app.get("/", (req, res) => {
    res.send("<h1>API Working Fine...</h1>");
});

app.use("/api/users", userRoutes);



// Database connection
connectDB().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on the PORT:${PORT}`);
    });
});
