import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { readdirSync } from "fs";
require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

// connect to MongoBd
mongoose
  .connect(
    "mongodb+srv://faysal-admin:admin12345@cluster0.weggr6r.mongodb.net/faysal?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Server is connected to MongoBd");
  });

//routes

app.get("/", (req, res) => {
  res.status(200).send("home GET requested");
});

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
