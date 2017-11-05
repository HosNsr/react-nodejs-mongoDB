import config from './config';
import apiRouter from './api';
import express from 'express';
import mongoose from 'mongoose';

// Connect To mongoDB
mongoose.connect("mongodb://localhost/HivaTeb");
var db = mongoose.connection;

// schema for my data in mongoDB
const slidersData = new mongoose.Schema({
    id : Number,
    backgroundImages : {
        backgroundImage : String
    },
    title : String,
    description : String
});

// create a new model with schema
var newSlider = mongoose.model("OneSlid" , slidersData);

// create a test slides
var slider = new newSlider({
    id : 5,
    backgroundImages : {
        backgroundImage : "url(images/slider/bg3.jpg)"
    },
    title : "sssss",
    description : "dddd"
});

// Save Data in Database
slider.save(function(err, slid){
    if(err) {throw err}
    console.log(slid);
})

// check error connect to DB
db.on('error', function(){
    console.log("To run a database sum problem...!")
})
// if connect to the mongo Console.log
db.once("open", function(){
    console.log("MongoDB is RUN...")
})

const server = express();

// Use EJS
server.set('view engine', 'ejs');

server.get('/', function(request, response){
    response.render('index')
})

// When use /api in API go to apiRouter
server.use('/api' , apiRouter)

// Use this folder to Route
server.use(express.static(__dirname + '/public'));

// Run Server In Port
server.listen(config.port, config.host, ()=> {
    console.info('Server Run In Port' , config.port)
});