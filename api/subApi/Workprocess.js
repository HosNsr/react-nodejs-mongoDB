import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for Workprocess ----------------------------
// schema for my data in mongoDB
const WorkprocessSchema = new mongoose.Schema({
    title : String,
    description : String,
    processes : [
        {
            name : String,
            icon : String,
        }
    ]
});

// create a new model with schema
var newWorkprocess = mongoose.model("Workprocess" , WorkprocessSchema);

// router use /api/slider
router.get('/', (request, response) => {
    newWorkprocess.findOne({}, (err, result)=>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;