const vehiclesRouter = require('express').Router()
const Vehicle = require('../models/Vehicle')


vehiclesRouter.get('/', (request,response)=>{
    Vehicle.find({}).then(notes=>{
        response.json(notes)
    })
})

module.exports = vehiclesRouter