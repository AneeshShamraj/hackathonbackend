import express from "express";
import User from "../models/user.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import md5 from "md5";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post('/login',async(req,res)=>
{
          const { email, password} = req.body;
          if (!email || !password){
		        return res.status(400).send("Missing email or password");
          }
          // const { error } = validate(req.body);
          // if(error)
          //     return res.status(400).send({ message:error.details[0].message});


          // checking if email exists
	        const emails = await User.find({ email: email });
	        if (emails.length === 0) return res.status(400).send("Email is incorrect");
          
          
          
          
          const user = emails[0];

          if (user.password !== md5(password)) return res.status(400).send("Incorrect password");

	        // sending token
	        const token = await jwt.sign(
		      {
			    id: user._id,
			    iat: Math.floor(Date.now() / 1000) + 24*60*60,
		      },
		      // config.jwtSecret
          process.env.JWTPRIVATEKEY
	        );
	        res.setHeader("token", token);
	        res.json({ token });

          
          // const validPassword = await bcrypt.compare(
          //     req.body.password,user.password
          // );
          // if(!validPassword)
          // {
          //   return res.status(401).send({ message:"Invalid credentials"});
          // }
          // const token = user.generateAuthToken();
          // res.status(200).send({data:token,message:"Logged in successfully"});

    
});

router.post('/signup',async(req,res)=>
{
          // const { error } = validate(req.body);
          // if(error)
          //     return res.status(400).send({ message:error.details[0].message});
	        const password = req.body.password;
	        const email=req.body.email;
	        const firstname=req.body.firstname;
	        const lastname=req.body.lastname;
          const userType=req.body.userType;

          //checking if one or more fields are empty
          if (!password || !email || !firstname || !lastname || !userType){
            return res.status(400).send("One or more of the fields are missing.");
          }

          //checking for multiple accounts for a single email
	        const emailcheck= await User.find({email:email});
	        if(emailcheck.length >0) return res.status(400).send("Only one account per email address is allowed");
        
        const hash=md5(password);
	      const newUser = new User({ password:hash, firstname,lastname,email,userType});
	      return res.json(await newUser.save());
        
});

// const validate = (data) =>
// {
//   const schema = Joi.object({
//         email:Joi.string().email().required().label("Email"),
//         password:Joi.string().required().label("Password")

//   });
//   return schema.validate(data);
// }

export default router;
