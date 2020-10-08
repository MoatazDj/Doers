const mongoose = require("mongoose")
const crypto = require("crypto")
const { timeStamp, Console } = require("console")
const { genSalt, hash, compare } = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    hashed_password:{
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    role: {
        type:String,
        default:'Normal',
    },
    resetPasswordLink: {
        data: String,
        default: ""
    }
}, {timeStamp: true})

userSchema.virtual('password')
.set(function(password) {
    this.password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
})
.get(function() {
    return this._password
})

userSchema.methods = {
    async makeSalt  () {
    //    return Math.round(new Date().valueOf() * Math.random()) + ""
    return await genSalt(10)
    }, 
    encryptPassword (password) {
        if (!password) return ""
        try {
            // return crypto.createHmac("sha256",this.salt)
            // .update(password)
            // .digest("hex")
            return await hash(password,this.makeSalt())            
        } catch (err) {
            console.log(err)
        }
    },
    authenthicate (plainPassword) {
        // return this.encryptPassword(plainPassword) === this.hashed_password
        return await compare(plainPassword,this.hashed_password)
    }
}

module.exports = mongoose.model("user", userSchema)