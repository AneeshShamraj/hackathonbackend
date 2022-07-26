import express from "express";
import User from "../models/user.js";
import validate from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/acceptrequest",async(req,res) =>
{
        const objid=req.body.objid;
        const currentevent=await StudentEvents.findOne({ _id: objid });
        const currentdate=currentevent.date;
        await StudentEvents.deleteMany({ date: currentdate });
        res.json(await StudentEvents.updateOne({_id:objid},{approved:true}));


});

router.post("/denyrequest",async(req,res) =>
{
        const objid=req.body.objid;
        try{
                res.send(await StudentEvents.deleteOne({ _id:objid }));
        }
        catch{
                res.status(400).send("Error");
        }
        

});

router.get("/getpendingrequests",async(req,res)=>
{
        var foundrequests=await StudentEvents.find({approved:false});
        res.json(foundrequests);
});


export default router;
