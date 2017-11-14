import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for AnimatedNumber ----------------------------
// schema for my data in mongoDB
const AnimatedNumber = new mongoose.Schema({
    title : String,
    description : String,
    lists : [
        {
            name : String,
            number : Number,
        }
    ]
});

// create a new model with schema
var modelAnimatedNumber = mongoose.model("AnimatedNumber" , AnimatedNumber);

// router use /api/AnimatedNumber
router.get('/', (request, response) => {
    modelAnimatedNumber.findOne({}, (err, result) =>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;