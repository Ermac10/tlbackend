require("dotenv").config();

const { PORT = 4000, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan');
const logRouter = require('./controllers/logBooks')


mongoose.connect(DATABASE_URL)


mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));



app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/logBook', logRouter)



app.get("/", (req, res) => {
    res.send("Welcome to Turbine Log Book API");
});  

app.get('/*', (req, res) => {res.status(404).json({ message: 'not found'})})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));