import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for SLIDER ----------------------------
// schema for my data in mongoDB
const slidersData = new mongoose.Schema({
    id : Number,
    backgroundImages : String,
    title : String,
    description : String
});

// create a new model with schema
var newSlider = mongoose.model("OneSlid" , slidersData);

// router use /api/slider
router.get('/', (request, response) => {
    newSlider.find({}, (err, result) =>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;