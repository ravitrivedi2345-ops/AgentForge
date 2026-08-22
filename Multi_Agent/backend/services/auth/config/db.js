import dns from "node:dns"
import mongoose from "mongoose"

dns.setServers((process.env.MONGODB_DNS_SERVERS ?? "1.1.1.1,8.8.8.8").split(","))

const connectDb=async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI) 
       console.log("db connected")
    } catch (error) {
       console.log(`db error ${error}`) 
    }
}

export default connectDb