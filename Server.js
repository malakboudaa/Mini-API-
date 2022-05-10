require("dotenv").config()
const express = require('express')
const app = express()
const database = require("./dbConfig")
database()
const {errorController} = require("./middelware/errorMiddleware")
const useRotes = require ('./Routes/Responsible')
const port = process.env.PORT || 5500

// Midelwares
app.use(express.json())
app.use(express.urlencoded({
   extended: false
}))
app.use(errorController)

//GENERAL ROUTE
app.use("/api",require('./Routes/Responsible'))
app.use("/api",require('./Routes/teacher'))

// Serveur
app.listen(port, () => console.log("server starting in port :" + port))
