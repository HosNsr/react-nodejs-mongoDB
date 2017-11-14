import config from './config';
import apiRouter from './api';
import sliderRouter from './api/subApi/Slider';
import moreRouter from './api/subApi/MoreAbout';
import morepropertyRouter from './api/subApi/MoreProperty';
import somecustomerRouter from './api/subApi/SomeCustomer';
import servicesRouter from './api/subApi/Services';
import portfolioRouter from './api/subApi/Portfolio';
import aboutRouter from './api/subApi/About';
import workprocessRouter from './api/subApi/Workprocess';
import meetteamRouter from './api/subApi/MeetTeam';
import animatednumberRouter from './api/subApi/AnimatedNumber';
import testimonialRouter from './api/subApi/Testimonial';
import blogRouter from './api/subApi/Blog';
import express from 'express';
import mongoose from 'mongoose';

var router = express.Router();

// Connect To mongoDB
mongoose.connect("mongodb://localhost/HivaTeb");
var db = mongoose.connection;

// check error connect to DB
db.on('error', function(){
    console.log("To run a database some problem...!")
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
});

//------------------------------ Route API --------------------------------//
// When use /api in API go to apiRouter
server.use('/api' , apiRouter);

// When use /api/slider in API go to apiRouter
server.use('/api/slider' , sliderRouter);

// When use /api/moreabout in API go to apiRouter
server.use('/api/moreabout' , moreRouter);

// When use /api/moreproperty in API go to apiRouter
server.use('/api/moreproperty' , morepropertyRouter);

// When use /api/Somecustomer in API go to apiRouter
server.use('/api/Somecustomer' , somecustomerRouter);

// When use /api/services in API go to apiRouter
server.use('/api/services' , servicesRouter);

// When use /api/portfolio in API go to apiRouter
server.use('/api/portfolio' , portfolioRouter);

// When use /api/about in API go to apiRouter
server.use('/api/about' , aboutRouter);

// When use /api/workprocess in API go to apiRouter
server.use('/api/workprocess' , workprocessRouter);

// When use /api/meetteam in API go to apiRouter
server.use('/api/meetteam' , meetteamRouter);

// When use /api/animatednumber in API go to apiRouter
server.use('/api/animatednumber' , animatednumberRouter);

// When use /api/testimonial in API go to apiRouter
server.use('/api/testimonial' , testimonialRouter);

// When use /api/blog in API go to apiRouter
server.use('/api/blog' , blogRouter);

// Use this folder to Route
server.use(express.static(__dirname + '/public'));

// Run Server In Port
server.listen(config.port, config.host, ()=> {
    console.info('Server Run In Port' , config.port)
});