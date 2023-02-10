const express = require('express')

const router = express.Router()
const mongoDB = require('mongodb')
const {expense} = require('../mongodb')


router.post("/addexpense",async(req,res)=>{
    try {
        const data = await expense.insertOne({...req.body})

        res.send(data)
    } catch (error) {
        console.log(error);
    }
})



router.post("/getExpense",async(req,res)=>{
    try {

        const {title} = req.body

        const data = await expense.findOne({title : title})

        if(data){

            res.send(data)
        }
        else{
            res.send("no expenses with this title")
        }

    } catch (error) {
        console.log(error);
    }
})
router.post("/updateExpense",async(req,res)=>{
    try {

        const {title} = req.body


        const data = await expense.findOne({title : title})

        const id = data._id

        const mongoid = new mongoDB.ObjectId(id)

        const newData = await expense.updateOne({_id : mongoid},{$set : {...req.body}})

        if(newData){

            res.send(mongoid)
        }
        else{
            res.send("no expenses with this title")
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = router