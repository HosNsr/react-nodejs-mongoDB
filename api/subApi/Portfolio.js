import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for Portfolio ----------------------------
// schema for my data in mongoDB
const PortfolioSchema = new mongoose.Schema({
    title : String,
    description : String,
    menuselect : [
        {
            datafilter : String, 
            title : String,
        }
    ],
    posts : [
        {
            classList : String,
            imgUrl : String,
            title : String,
            description : String,
        }
    ]
});

// create a new model with schema
var newPortfolio = mongoose.model("Portfolio" , PortfolioSchema);

// router use /api/slider
router.get('/', (request, response) => {
    newPortfolio.findOne({}, (err, result)=>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;