import express from 'express';

const router = express.Router();

router.get('', (request, response) => {
    response.send("You are in APIs")
})

export default router;