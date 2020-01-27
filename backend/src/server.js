// import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import routes from "./routes";
import db from "./db";

// Checa se o banco está online!
// db.authenticate().catch(err => console.log(err));

const app = express();

var corsOptions = {
  origin: "http://localhost:3333",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(3333);
