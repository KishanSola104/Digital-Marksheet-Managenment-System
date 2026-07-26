require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const employeeRoute = require('./routes/employeeRoute');
const userRoute = require('./routes/userRoute');
const roleRoutes = require("./routes/roleRoute");
const studentRoute = require('./routes/studentRoute');
const classRoute = require('./routes/classRoute');
const academicYearRoute = require('./routes/academicYearRoute');
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'],      
    credentials: true                                          
};

app.use(cors(corsOptions));

app.use(express.json());
//DB Connection
connectDB();



app.get('/', (req, res) => {
    res.send('Server is running');
});


//Routes
app.use('/employees', employeeRoute);
app.use('/login', userRoute)
app.use('/students', studentRoute);
app.use("/roles", roleRoutes);
app.use('/classes', classRoute);
app.use('/academicYear',academicYearRoute);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`)
});