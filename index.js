import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./db.js";
import user from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import getusers from "./routes/getuser.js";
import student from "./routes/student.js";

Connection();



dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users",user);
app.use("/api/auth",authRoutes);
app.use("/api/getusers",getusers);
app.use("/api/student",student);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening to the port 8080."));
