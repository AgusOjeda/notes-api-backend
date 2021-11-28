const mongoose = require('mongoose')
//Schema
const vehicleSchema = new mongoose.Schema({
    title: String,
    brand: String,
    model: String,
    year: String,
    price: Number,
    image: String,
    km: String

})
vehicleSchema.set('toJSON',{
    transform:(document, returnObject) => {
        returnObject.id = returnObject._id
        delete returnObject._id
        delete returnObject.__v
    }
})

//Model
const Vehicle = new mongoose.model('Vehicle', vehicleSchema)



module.exports = Vehicle