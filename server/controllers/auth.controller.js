const User = require('./../models/auth.models')
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library') 
const fetch = require('node-fetch')
exports.registerController = (req, res)=>{
    const{name, email, password} = req.body
    console.log({name, email, password})
    res.json({
        success: true,
        message: 'Register route'
    })
}
