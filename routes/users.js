const express = require('express')

const router = express.Router()
const mongoDB = require('mongodb')
const {users} = require('../mongodb')


router.post("/addUser",async(req,res)=>{
    try {
        const data = await users.insertOne({...req.body})

        res.send(data)
    } catch (error) {
        console.log(error);
    }
})



router.post("/login",async(req,res)=>{
    try {

        const {email} = req.body

        const data = await users.findOne({email : email})

        if(data){

            res.send(data)
        }
        else{
            res.send("user not registered")
        }
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router