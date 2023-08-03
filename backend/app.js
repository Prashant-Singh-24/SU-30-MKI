const express= require('express');
const app = express();

app.use(express.json());


//Routes
const teacher = require('./routes/teacherRoute');
app.use('/api/v1',teacher);
module.exports= app;