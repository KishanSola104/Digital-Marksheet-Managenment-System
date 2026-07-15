require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const app = express();
const employeeRoute = require('./routes/employeeRoute');
const userRoute = require('./routes/userRoute');
app.use(cors());
app.use(express.json());
//DB Connection
connectDB();



app.get('/', (req, res) => {
    res.send('Server is running');
});


//Routes
app.use('/employees', employeeRoute);
app.use('/login',userRoute)


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`)});