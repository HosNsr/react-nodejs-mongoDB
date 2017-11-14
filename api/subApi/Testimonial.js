import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for Testimonial ----------------------------
// schema for my data in mongoDB
const TestimonialSchema = new mongoose.Schema([
    {
        name : String,
        position : String,
        description : String,
        imgUrl : String
    }
]);

// create a new model with schema
var newTestimonial = mongoose.model("Testimonial" , TestimonialSchema);

// router use /api/slider
router.get('/', (request, response) => {
    newTestimonial.find({}, (err, result)=>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;