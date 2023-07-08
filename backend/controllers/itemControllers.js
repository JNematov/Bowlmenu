const Item = require('../models/itemModel')

const getItems = async (req, res) => {
    const items = await Item.find()
    res.status(200).json(items)
}

const postItem = async (req, res) => {

    const item = await Item.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description ? req.body.description : null,
        options: req.body.options
    })
    console.log(req.body.options)
    res.status(200).json(item)
}

const putItem = async (req, res) => {
    let item = await Item.findById(req.params.id)
    if(!item) {
        res.status(404).json('update error: unable to update. Item '+req.params.id+' not found')
    }else{
        item = await Item.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(item)
    }
}

const deleteItem = async (req, res) => {
    let item = await Item.findById(req.params.id)
    if(!item) {
        res.status(404).json('delete error: Item '+req.params.id+' not found')
    }else{
        item.remove()
        res.status(200).json('removed item '+req.params.id)
    }
}

module.exports = {getItems, postItem, putItem, deleteItem}