import express from "express";
import mongoose from "mongoose";
import {MONGO_URI, PORT} from "./config.js";
import router from "./router/User.js";
import router2 from "./router/User.js"

const app = express();

app.use(express.json());
app.use('/users', router)
app.use('/posts', router2)


app.get("/", (req, res) =>{
    res.send({
        data:"as",
        fact:"dig bick"
    });
});


const connect  = () => {
    try{
        mongoose.connect(MONGO_URI, {}).then(()=>{
            console.log("Connected to DB");
        });
    } catch (error) {
        console.error("could not connect to DB");
        process.exit(1);
    }
};


app.listen(PORT, async () => {
    connect();
    console.log("server running on " + PORT)
})