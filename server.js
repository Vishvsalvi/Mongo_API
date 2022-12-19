const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors({
    origin:"http://localhost:3000"
}))
const port = process.env.PORT || 3001;
app.use(express.json())

const connectDB = require("./db/connect")
const taskRoute = require("./Routes/route")
require('dotenv').config()
app.use("/tasks", taskRoute)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()