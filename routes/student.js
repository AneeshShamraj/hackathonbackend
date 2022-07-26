import express from "express";
import User from "../models/user.js";
import Student from "../models/student.js";
import validate from "../models/user.js";
import bcrypt from "bcrypt";

const userData = express.Router();

userData.get("/studentevent",async(req,res) =>
{
            const firstName = req.body;
            const lastName = req.body;
            const eventName = req.body.eventname;
            const CommitteeName= req.body.committeename;
            const date = req.body.date;
            const description = req.body.description;
            const StudentInfo = new Student({
                  firstname:firstName,
                  lastname:lastName,
                  eventname:eventName,
                  committeename:CommitteeName,
                  date:date,
                  description:description,
            });
            await StudentInfo.save();
            res.send(StudentInfo);



})


export default userData;
