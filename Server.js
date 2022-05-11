require("dotenv").config()
const express = require('express')
const {errorController} = require("./middelware/errorMiddleware")

const app = express()
const database = require("./dbConfig")
database()
const port = process.env.PORT || 5500


// Midelwares
app.use(express.json())
app.use(express.urlencoded({
   extended: false
}))


app.use("/api",require('./Routes/responsible'))
app.use("/api",require('./Routes/teacher'))
app.use("/api",require('./Routes/student'))

app.listen(port, () => console.log("server starting in port :" + port))
app.use(errorController)