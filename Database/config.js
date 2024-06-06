const mongoose = require('mongoose')
const MONGOURL = 'mongodb://localhost:27017/tasks'
const connect = mongoose.connect(MONGOURL).then(() => {
    console.log('connected to database')
})

module.exports = connect