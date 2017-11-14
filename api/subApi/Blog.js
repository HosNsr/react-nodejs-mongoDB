import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for Blog ----------------------------
// schema for my data in mongoDB
const Blog = new mongoose.Schema({
    title : String,
    description : String,
    posts : [
        {
            date : Date,
            title : String,
            description : String,
            imgUrl : String,
            icon : String,
            btnTitle : String,
            author : String,
            category : String,
            comments : Number
        }
    ]
});

// create a new model with schema
var modelBlog = mongoose.model("Blog" , Blog);

// router use /api/Blog
router.get('/', (request, response) => {
    modelBlog.findOne({}, (err, result) =>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;