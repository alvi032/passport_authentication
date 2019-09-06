const express = require('express')
const router =  express.Router()

// User model
const User = require('../models/User')

// Login Page
router.get('/login', (req, res) => res.render('login'))

// Registration Page
router.get('/register', (req, res) => res.render('register'))

// Register Handle
router.post('/register', (req, res) => {
    // console.log(req.body)
    const{ name, email, password, password2 } = req.body
    let errors = []

    // Check required fields
    if(!name || !email || !password || !password2){
        errors.push({
            msg: 'Please fill in all the fields'})
    }

    // Check passwords match
    if(password !== password2){
        error.push({
            msg: 'Passwords do not match'})
    }

    // Check password length
    if(password.length < 6){
        errors.push({
            msg: 'Password should be atleast 6 characters'
        })
    }

    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    }
    else{
        // Validation Passed
        User.findOne({ email:email })
            .then(user => {
                if(user){
                    // User Exists
                    error.push({})
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    })
                }
            })
        // res.send('pass')
    }

    // res.send('Hello')
})

module.exports = router