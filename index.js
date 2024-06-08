const express = require('express')
const multer = require('multer')
const fs = require('fs')
const db = require('./config/database')
const router = require('./routers/user.router')
const userDB = require('./models/userSchema')
const upload = require('./middlewares/upload')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads/'))
app.use('/', router)

app.listen(1303, (err) => {
    db()
    if (err) {
        console.log("Server not started")
        return false
    }
    console.log("Server started at http://localhost:1303")
})