const express = require('express')
const {json}= require('express')
const cors = require('cors')
const app =express()
const users = require('./routes/users')
app.use(cors(),json())


app.use(users,"user")



app.listen(1000,()=>console.log("server running on port 1000"))