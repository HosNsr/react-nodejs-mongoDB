import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for SLIDER ----------------------------
// schema for my data in mongoDB
const ServicesData = new mongoose.Schema({
    title : String,
    description : String,
    myservices : [
        {
            title : String,
            description : String,
            icon : String
        }
    ]
});

// create a new model with schema
var NewServices = mongoose.model("Services" , ServicesData);

// router use /api/slider
router.get('/', (request, response) => {
    NewServices.findOne({}, function(err, result){
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;