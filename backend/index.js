const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
import userRoutes from '../routes/userRoutes.js';

dotenv.config();
connectDB();

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/user',userRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('server is running on port', PORT);
})