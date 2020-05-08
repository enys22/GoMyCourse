const router = require('express').Router();

const Video = require('../../models/Video')

/// GET All Video
router.get('/',(req,res)=>{
    Video.find()
        .then(videos => res.json(videos))
})

/// GET Video by cour
router.get('/:cour',(req,res)=>{
    Video.find({id_cour : req.params.cour})
        .then(videos => res.json(videos))
})

/// POST New Video
router.post('/',(req,res)=>{
    let newVideo = new Video(req.body)
    newVideo.save()
        .then(video => res.json(video))
})

/// UPDATE Video
router.put('/:id',(req,res)=>{
    let id = req.params.id
    let data = req.body
    Video.findOneAndUpdate({_id : id }, data)
        .then(video => res.json(video))
})

// DELETE Video By ID
router.delete('/:id',(req,res)=>{
    Video.findById(req.params.id)
        .then(video => video.remove().then(()=>res.json({deleteSuccess : true})))
        .catch(err => res.status(404).json({deleteSuccess : false}))
})

module.exports = router;