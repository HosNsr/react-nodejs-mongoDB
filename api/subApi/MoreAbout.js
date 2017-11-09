import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for MOREABOUT ----------------------------
// schema for my data in mongoDB
const moreAbout = new mongoose.Schema({
    title : String,
    description : String,
    btntitle : String,
});

// create a new model with schema
var More = mongoose.model("MoreAbout" , moreAbout);

// router use /api/moreabout
router.get('/', (request, response) => {
    More.findOne({}, function(err, result){
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;