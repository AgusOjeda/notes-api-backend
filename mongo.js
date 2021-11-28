const mongoose = require('mongoose')
const password = require('./password.js')
const connectionString = process.env.MONGO_DB_URI

// conexion a mongodb
mongoose.connect(connectionString, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected')
}).catch(err => {
    console.error(err)
})