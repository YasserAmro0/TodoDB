import { } from 'dotenv/config'
import app from "./index.js";
import mongoose from 'mongoose';


mongoose.connect(process.env.mongodb_URL)
    .then(() => {
        app.listen(app.get('port'), () => {
            console.log("connected with DB...");
            console.log(`Server is Listening at http://localhost:${app.get('port')}`);
        })
    }).catch(err => console.error('Could not connect to MongoDB...', err));

