import express from "express";
import User from "../models/user.js";
import validate from "../models/user.js";
import bcrypt from "bcrypt";

const userData = express.Router();

userData.get("/",async(req,res) =>
{
        try {
          const getuserdata = await User.find();
          res.send(getuserdata);
        } catch (e) {
                res.status(409).send({ message:"xyz"})
        }


})


export default userData;
