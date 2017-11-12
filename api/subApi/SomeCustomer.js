import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for SomeCustomer ----------------------------
// schema for my data in mongoDB
const SomeCustomerSchema = new mongoose.Schema({
    title : String,
    description : String,
    btntitle : String
});

// create a new model with schema
var newSomeCustomer = mongoose.model("SomeCustomer" , SomeCustomerSchema);

// router use /api/slider
router.get('/', (request, response) => {
    newSomeCustomer.findOne({}, (err, result)=>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;