const express = require("express");
const cors = require("cors");
const connectDB =require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB().then((db)=>{
  const usersCollection= db.collection("users");
  //create a new user
  app.post("/api/users",async(req , res )=>{
    try{
    const user = req.body;
    const result=await
    usersCollection.insertOne(user);
    res.send({insertedId: result.insertedId});
    }catch(err){
      res.status(500).send({error:"failed to insert user",details:err});
    }
  });

  //get all users
  app.get("/api/users",async(req,res)=>{
    try{
    const users=await
    usersCollection.find().toArray();
    res.send(users);
    }catch(err){
      res.status(500).send({error:
        "failed to fetch users",details:err
      });
    }

  });
});

app.get("/", (req, res) => {
  res.send("Backend is running 🟢");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
