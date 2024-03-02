const mongoose = require('mongoose')
const {MONGO_URI} = require('./dotenvConfig')
 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log (`MongoDB Connected: ${conn.connection.host}` )
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = connectDB