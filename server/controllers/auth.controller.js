const User = require('./../models/auth.models')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt')
const { OAuth2Client, JWT } = require('google-auth-library') 
const fetch = require('node-fetch')
const {validationResult} = require('express-validator')
//custom error handler to get useful error from database errors
const {errorHandler} = require('../helpers/dbErrorHandling')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.MAIL_KEY)

exports.registerController = (req, res)=>{
    const{name, email, password} = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const firstError = errors.array.map((error) => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    } else {
        User.findOne({
            email
        }).exec((err, user)=>{
            if (user) {
                return res.status(400).json({
                    error: "Email is taken"
                })
            }
        })
        const token = jwt.sign(
        {
            name,
            email,
            password
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : '15m'
        }  
        )

        const emailData = {
            from: process.env.EMAIL_FROM,
            to: process.env.to,
            subject: 'Account activation link',
            html: `
            <h1>Please Click to link to activate</h1>
            <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
            <hr/>
            <p>This email contain sensetive info</p>
            <p>${process.env.CLIENT_URL}</p>
            `
        }
        sgMail.send(emailData).then((sent) =>{
            return res.json({
                message: `Email has been sent to ${email}`
            })
        }).catch((err) => {
            return res.status(400).json({
                error : errorHandler(err)
            })
        })
    }
    res.json({
        success: true,
        message: 'Register route'
    })
}


"Ommekil9a7ba356789    GOOGLE_CLIENT="