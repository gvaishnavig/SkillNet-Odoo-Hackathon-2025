const { MongoClient} = require("mongodb");
require("dotenv").config();
const client = new MongoClient(process.env.MONGO_URI);
async function connectDB(){
    try{
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        return client.db("skillSwapDB"); // database name
    }catch(error){
        console.log("MongoDB connection error:",error);
    }
}
module.exports=connectDB;