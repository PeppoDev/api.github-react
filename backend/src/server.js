// import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import routes from "./routes";
import db from "./db";

// Checa se o banco está online!
// db.authenticate()
//   .then(console.log("Autenticado com sucesso!"))
//   .catch(console.log("Erro ao autenticar com banco!"));

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(3333);
