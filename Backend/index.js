const express=require('express');
const http=require('http');
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const cors=require('cors')

const authRoutes=require('./routes/authRoutes');
const documentRoutes=require('./routes/documentsRoutes');

dotenv.config();

connectDB();

const app=express();
const server=http.createServer(app);

app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization']
}));



app.use(express.json()); //for parsing application/json
app.use('/api/auth',authRoutes); //for routing
app.use('/api/document',documentRoutes);

const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
