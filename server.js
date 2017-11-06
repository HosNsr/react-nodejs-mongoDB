import config from './config';
import apiRouter from './api';
import express from 'express';
import mongoose from 'mongoose';

// Connect To mongoDB
mongoose.connect("mongodb://localhost/HivaTeb");
var db = mongoose.connection;

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
});

// When use /api in API go to apiRouter
server.use('/api' , apiRouter)

// Use this folder to Route
server.use(express.static(__dirname + '/public'));

// Run Server In Port
server.listen(config.port, config.host, ()=> {
    console.info('Server Run In Port' , config.port)
});