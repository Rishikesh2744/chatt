const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors =require('colors');
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get("/",(req,res) => {
    res.send("aPi is  successfully on  runnning");
})
app.use("/api/user",userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);