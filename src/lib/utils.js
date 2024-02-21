/**
 * connection to db
 */

const mongoose = require('mongoose')
// import mongoose from "mongoose"

const connection = {}

const connectionToDB = async () => {
    try {
        if(connection.isConnected) {
            console.log("Use current connection!")
            return
        }
       const db = await mongoose.connect(`${process.env.MONGO}`)
       connection.isConnected = db.connections[0].readyState
    } catch (error) {
        throw new Error(error)
    }
}

connectionToDB()

module.exports = connectionToDB