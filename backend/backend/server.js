import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";

// Config
import { connectDB } from "./config/db";


// MiddleWare
import { errorHandler,notFound } from "./middleWare/errorMiddleWare";

// Routes
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/order', orderRoutes)


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, function(err){
    if(err){
        console.log("Error in server setup")
    }
    console.log("Server listeting on PORT",PORT)
})