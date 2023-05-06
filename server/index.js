import { } from 'dotenv/config'
import { fileURLToPath } from 'url'
import path from 'path';
import express from "express";
import router from '../router/index.js';
const app = express();
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, "..", "public")));


app.use(router);


export default app;
