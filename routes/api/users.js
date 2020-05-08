const router = require('express').Router();

const User = require('../../models/User')

/// GET All User
router.get('/',(req,res)=>{
    User.find()
        .then(users => res.json(users))
})

/// POST New User
router.post('/',(req,res)=>{
    console.log("request body : "+req.body)
    let newUser = new User(req.body)
    newUser.save()
        .then(user => res.json(user))
})

/// UPDATE User
router.put('/:id',(req,res)=>{
    let id = req.params.id
    let data = req.body.data
    User.findOneAndUpdate({_id : id }, data)
        .then(user => res.json(user))
})

// DELETE User By ID
router.delete('/:id',(req,res)=>{
    User.findById(req.params.id)
        .then(user => user.remove().then(()=>res.json({deleteSuccess : true})))
        .catch(err => res.status(404).json({deleteSuccess : false}))
})

module.exports = router;