import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// ------------------- schema for MeetTeam ----------------------------
// schema for my data in mongoDB
const MeetTeam = new mongoose.Schema({
    title : String,
    description : String,
    people : [
        {
            imgUrl : String,
            name : String,
            position : String,
            moreAbout : String
        }
    ],
    ability : {
        title : String,
        lists : [
            {
                title : String,
                rate : Number
            }
        ]
    },
    history : {
        title : String,
        lists : [
            {
                year : Number,
                description : String
            }
        ]
    },
    qa : {
        title : String,
        lists : [
            {
                title : String,
                description : String
            }
        ]
    }
});

// create a new model with schema
var modelMeetTeam = mongoose.model("MeetTeam" , MeetTeam);

// router use /api/MeetTeam
router.get('/', (request, response) => {
    modelMeetTeam.findOne({}, (err, result) =>{
        if(err){ return console.error}
        response.send(result);
    });
})

export default router;