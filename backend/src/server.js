import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import routes from './routes'
import { getUser } from './services/apiGit'

const app = express();


// mongoose.connect()

var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(routes)
app.listen(3333);

