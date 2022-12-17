const Author = require('../models/author.model');

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            res.status(400).json(err)
        })
    },
    getAllAuthors:(req, res) => {
        Author.find({})
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
        })
    },
    getOneAuthor:(req, res) => {
        Author.findOne({_id:req.params.id})
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
        })
    },
    updateAuthor:(req, res) => {
        Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
        })
    },
    deleteAuthor:(req, res) => {
        Author.deleteOne({_id:req.params.id})
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
        })
    }
}