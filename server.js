import config from './config';
import apiRouter from './api';
import sliderRouter from './api/subApi/Slider';
import moreRouter from './api/subApi/MoreAbout';
import morepropertyRouter from './api/subApi/MoreProperty';
import somecustomerRouter from './api/subApi/SomeCustomer';
import servicesRouter from './api/subApi/Services';
import portfolioRouter from './api/subApi/Portfolio';
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

// Use this folder to Route
server.use(express.static(__dirname + '/public'));

// Run Server In Port
server.listen(config.port, config.host, ()=> {
    console.info('Server Run In Port' , config.port)
});