const express = require('express')
const app = new express()
const PORT = 4000
const connect = require('./Database/config')
const router = require('./Router')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(router)
app.use(cookieParser())

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


