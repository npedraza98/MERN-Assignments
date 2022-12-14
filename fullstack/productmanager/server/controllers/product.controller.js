const Product = require('../models/product.model');

module.exports = {
    createProduct:(req, res) => {
        Product.create(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    getAllProducts:(req, res) => {
        Product.find({})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    getOneProduct:(req, res) => {
        Product.findOne({_id: req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateProduct:(req, res) => {
        Product.updateOne({_id:req.params.id}, req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    deleteProduct:(req, res) => {
        Product.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}