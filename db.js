import mongoose from "mongoose";

export const Connection = async() =>{
  const connectionParams = {
  useNewUrlParser:true,
  useUnifiedTopology:true,
};

try{
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.tf3atln.mongodb.net/?retryWrites=true&w=majority",connectionParams);
    console.log("Connected to the database.");
}
catch(error){
  console.log(error);
  console.log("Could not connect to the database.");
}
};

export default Connection;
