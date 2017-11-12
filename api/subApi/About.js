import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for about ----------------------------
// schema for my data in mongoDB
const About = new mongoose.Schema({
    titile : String,
    description : String,
    briefintroduction : {
        titile : String,
        description : String,
        propertic : [
            {
                name : String,
            }
        ],
    },
    video : {
        titile : String,
        videoUrl : String,
    },
    btntitile : String,
});

// create a new model with schema
var modelAbout = mongoose.model("About" , About);

// router use /api/about
router.get('/', (request, response) => {
    modelAbout.findOne({}, (err, result) =>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;