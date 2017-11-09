import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for MOREProperty ----------------------------
// schema for my data in mongoDB
const moreAbout = new mongoose.Schema({
    title : String,
    description : String,
    propertys : [
        {
            titleprop : String,
            descriptionprop : String,
            icon : String
        }
    ],
    backgroundImages : {
        backgroundImage : String
    },
});

// create a new model with schema
var MoreProp = mongoose.model("MorePrperty" , moreAbout);

// router use /api/moreproperty
router.get('/', (request, response) => {
    MoreProp.find({}, function(err, result){
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;