import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mongodb from "mongodb";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
