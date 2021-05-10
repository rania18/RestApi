const express = require('express')
const router = express.Router()
const User = require('../models/User')

//GET : RETURN ALL USERS
router.get('/',(req,res)=>{
    User.find()
    .then((data)=>{res.send(data)})
    .catch((error)=>{res.status(400).send(error)})
});

//Post : ADD A NEW USERS TO THE DATABASE
router.post('/newUser',(req,res)=>{
    const { firstname,lastname,email }=req.body;
    const newUser = new User({
        firstname,
        lastname,
        email
    })
    newUser
    .save()
    .then((contact)=>{res.send({contact})})
    .catch((error)=>{res.status(400).send(error)})
})

//PUT: EDIT A USER BY ID
router.put('/update/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body)
    .then((data)=> res.send({data}))
    .catch((err)=> res.status(400).send(err))
})

//DELETE: REMOVE A USER BY ID
router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndRemove(req.params.id)
    .then((data)=>{
        if (!data){
            res.status(404).json({msg: 'Error ID not Valid'})
        }else{
            res.status(200).json({data})
        }
    })
    .catch((err)=> res.status(400).send(err))
})

module.exports = router;