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

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err){
            console.log(err)
            res.json(err);
        }
        else{
            res.status(200);
            res.json(users);
        }
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err){
            res.status(404);
            res.send({message: 'User not found!'});
        }
        else{
            console.log(req.body);
            res.json({content: user});
        }
    });
});

router.put('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err){
            res.status(404);
            res.send({message: 'User not found'});
        }
        else{
            console.log(req.body);
            user.set(req.body);

            user.save((err, user) => {
                if(err){
                    res.status(409);
                    res.send({message: err});
                }
                console.log(user);
                res.status(201);
                res.json({content: user});
            });
        }
    });
});

module.exports = router;