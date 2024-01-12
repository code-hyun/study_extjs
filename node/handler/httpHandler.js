const express = require('express');
const router = express.Router();
const db = require('../service/postgreSQL')

router.get('/select', async (req, res) => {
    let data = req.query;
    delete data._dc;
    console.log(data)

    try {
        const result = await db.select(data); 
        res.json(result); 
    } catch (error) {
        console.error('select error:', error);
        res.status(500).send('Server error');
    }
})

module.exports = router;
