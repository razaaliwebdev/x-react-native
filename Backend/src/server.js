import express from 'experss';
import connectDB from './config/db';

const app = express();


// Middleware
app.use(express.json());



// Routes 
app.get("/", (req, res) => {
    res.send("<h1>API Working Fine...</h1>");
});



// Database connection
connectDB(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on the PORT${PORT}`);
    });
});

