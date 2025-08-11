import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/register',userRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('server is running on port', PORT);
});