const router = require('express').Router();

const Comment = require('../../models/Comment')


/// GET all Comments
router.get('/',(req,res)=>{
    Comment.find()
        .sort({date : 1})
        .then(comments => res.json(comments))
})

/// GET Comments by Video
router.get('/:id',(req,res)=>{
    Comment.find({id_video : req.params.id})
        .sort({date : 1})
        .then(comments => res.json(comments))
})

/// POST New Comment
router.post('/',(req,res)=>{
    let newComment = new Comment(req.body)
    newComment.save()
        .then(comment => res.json(comment))
        .catch(err=>console.log(err))
})


// DELETE Comment By ID
router.delete('/:id',(req,res)=>{
    Comment.findById(req.params.id)
        .then(comment => comment.remove().then(()=>res.json({deleteSuccess : true})))
        .catch(err => res.status(404).json({deleteSuccess : false}))
})

module.exports = router;