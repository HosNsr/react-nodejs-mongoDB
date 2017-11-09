import express from 'express';
import mongoose from 'mongoose';

// creat a new Router
const router = express.Router();

// All Middlewere
router.get('/', (request, response) => {
    response.send("You are in APIs")
});

export default router;