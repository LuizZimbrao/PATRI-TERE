import "reflect-metadata";
import dotenv from 'dotenv';
import './database/connect';
import express from "express";

import cors from './middlewares/cors';
import errorHandler from './middlewares/errorHandler';


import routes from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => console.log(`Server started at ${process.env.PORT || 3333}`));
