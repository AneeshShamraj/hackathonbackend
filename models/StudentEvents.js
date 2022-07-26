import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const studentSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    eventname:{type:String,required:true},
    committeename:{type:String,required:true},
    date:{type:Date,required:true},
    description:{type:String,required:true},
    approved:{type:boolean,default:false},
});

// userSchema.methods.generateAuthToken = function(){
//     const token = jwt.sign({_id:this.id},process.env.JWTPRIVATEKEY,{expiresIn:'7d'});
//     return token
// }

const Student = mongoose.model("Student",studentSchema);

// const validate = (data) => {
//     const schema = Joi.object({
//       firstName:Joi.string().required().label("firstName"),
//       lastName:Joi.string().required().label("LastName"),
//       email:Joi.string().email().required().label("Email"),
//       password:passwordComplexity().required().label("Password")
//     });
//     return schema.validate(data)
// };

export default Student;
