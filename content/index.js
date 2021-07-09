// npm install jsonwebtoken
// npm run dev -- To break server and connect Again.
import express from "express";
import mongoose from "mongoose";
import router from "./Routes/users.js";

// Port Setup
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URL
const url = "mongodb+srv://prathamesh:Guvi@123@cluster0.nh0k2.mongodb.net/IMDB";

// MongoDB Connection
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// MiddleWare
app.use(express.json());

app.use("/users", router);

app.get("/", (request, response) => {
  response.send("WELCOME HERE Iam New");
});

app.listen(PORT, () => console.log("Server STarted!!!!!!!!"));
