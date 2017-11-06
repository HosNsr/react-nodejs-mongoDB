import express from 'express';
import mongoose from 'mongoose';

// schema for my data in mongoDB
const slidersData = new mongoose.Schema({
    id : Number,
    backgroundImages : {
        backgroundImage : String
    },
    title : String,
    description : String
});

// create a new model with schema
var newSlider = mongoose.model("OneSlid" , slidersData);

// creat a new Router
const router = express.Router();

// All Middlewere
router.get('', (request, response) => {
    response.send("You are in APIs")
});

router.get('/slider', (request, response) => {
    newSlider.find({}, function(err, result){
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;