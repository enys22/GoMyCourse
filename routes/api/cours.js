const router = require('express').Router();

const Cour = require('../../models/Cour')

/// GET All Cour
router.get('/',(req,res)=>{
    Cour.find()
        .then(cours => res.json(cours))
})

/// GET Cour by Category
router.get('/:category',(req,res)=>{
    console.log("category : "+req.params.category)
    Cour.find({category : req.params.category })
        .then(cours => res.json(cours) )
})

/// POST New Cour
router.post('/',(req,res)=>{
    let newCour = new Cour(req.body.data)
    newCour.save()
        .then(cour => res.json(cour))
})

/// UPDATE Cour
router.put('/:id',(req,res)=>{
    let id = req.params.id
    let data = req.body
    Cour.findOneAndUpdate({_id : id }, data)
        .then(cour => res.json(cour))
})

// DELETE Cour By ID
router.delete('/:id',(req,res)=>{
    Cour.findById(req.params.id)
        .then(cour => cour.remove().then(()=>res.json({deleteSuccess : true})))
        .catch(err => res.status(404).json({deleteSuccess : false}))
})

module.exports = router;