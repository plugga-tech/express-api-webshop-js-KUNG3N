const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String
});

// create the model for the user and expose it to our app
const User = mongoose.model('User', userSchema);

/**
 * @api {get} /users Get all users
 */
router.get("/", function(rew, res, next){
    try{
    // get all users
        User.find({}).catch(err => {
            next(err);
        }).then(users => {
            res.send(users);
        });
    } catch (err) {
        next(err);
    }
});

/**
 * @api {post} /users get user by id
*/
router.post("/", function (req, res, next) {
    try {
        const id = req.body.id;

        if (!id) {
            res.status(400).send("id is required");
            return;
        }

        User.findOne({ id: id }).catch(err => {
            next(err);
        }).then(user => {
            res.send(user);
        });
    } catch (err) {
        next(err);
    }
});

/**
 * @api {post} /users/add Create a new user
*/
router.post("/add", function (req, res, next) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).send("name, email and password are required");
            return;
        }

        const user = new User({
            id: crypto.randomUUID(),
            name: name,
            email: email,
            password: password
        });

        user.save().catch(err => {
            next(err);
        }).then(user => {
            res.send(user);
        });
    } catch (err) {
        next(err);
    }
});

/**
 * @api {post} /users/login Update a user
*/
router.post("/login", function (req, res, next) {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            res.status(400).send("email and password are required");
            return;
        }

        User.findOne({ email: email, password: password }).catch(err => {
            next(err);
        }).then(user => {
            res.send(user);
        });
    } catch (err) {
        next(err);
    }
});


module.exports = router;