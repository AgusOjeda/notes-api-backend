const mongoose = require('mongoose')
//Schema
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
})

userSchema.set('toJSON',{
    transform:(document, returnObject) => {
        returnObject.id = returnObject._id
        delete returnObject._id
        delete returnObject.__v

        delete returnObject.passwordHash
    }
})

//Model
const User = new mongoose.model('User', userSchema)

module.exports = User