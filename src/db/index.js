import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{      // async is used because db is another continent
    try {
         const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
         console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}${connectionInstance.connection.host}`)
    } catch (error){
            console.log("MONGODB connecton error", error);
            process.exit(1)         
            // it exits the node.js current process with an error code, whereas the exit(0) terminates the current node.js process immediately
    }
}


export default connectDB