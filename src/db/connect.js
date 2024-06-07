import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connectionInstance=await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log(`\ndatabase connected ${connectionInstance}`)
    }
    catch(error)
    {
        console.log("error")
    }
}
export default connectDB