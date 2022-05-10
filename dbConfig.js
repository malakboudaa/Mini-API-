const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    }).connection
    console.log("MONGODB CONNECTED =D")
  } catch (error) {
    process.exit(1)
    console.error(error)
  }
 
}
module.exports = connectDB
