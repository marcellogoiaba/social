const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

//Register
router.post('/register', (req, res) => {
    console.log(req.body);
    if(!req.body.email || !req.body.password || !req.body.username){
        res.json({
            success: false, 
            message: 'Please fill all required fields!'
        });
    }
    else{
        let newUser = new User({
            email: req.body.email,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            password: req.body.password,
            username: req.body.username
        });
        newUser.save((err) => {
            if(err){
                console.log(err);
                res.status(409);
                res.send({message: err});
            }
            else{
                res.status(201);
                res.json({content:newUser});
            }
        })
    }
});


module.exports = router;