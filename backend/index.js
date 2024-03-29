import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.js";
import userRoutes from "./Routes/user.js";
import doctorRoutes from "./Routes/doctor.js";
import reviewRoutes from "./Routes/review.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOption = {
    origin: true,
    credentials: true,
};

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

//Database connection
mongoose.set("strictQuery", false);
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    console.log('connected to mongoDB');
        
    } catch (error) {
        console.log('MongoDB connection error');
    }
};

//middleware
app.use(express.json()); // parse incoming JSON requests
app.use(cookieParser()); //parse cookies attached to the clients request (use auth or session identifiers)
app.use(cors(corsOption)); // allow cross-origin requests
app.use('/api/v1/auth', authRoutes); //middleware for authentications - protected routes 
app.use('/api/v1/users', userRoutes); //routes for users
app.use('/api/v1/doctors', doctorRoutes); //routes for doctors
app.use('/api/v1/reviews', reviewRoutes); //routes for doctors
  

app.listen(port, () => {
  connectDB();
  console.log(`app listening on port ${port}`);
});
