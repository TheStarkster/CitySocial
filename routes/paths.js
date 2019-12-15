const express = require('express');
const db = require('../config/connection/db')
const User = require('../models/User')
const router = express.Router();

router.get('/',(req,res)=> {
    var name ="ekas"
    User.create({name,name})
    .then(u => {
        console.log(u)
        res.sendStatus(200)
    })
})

module.exports = router