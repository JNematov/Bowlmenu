const express = require('express')
const itemRouter = express.Router()
const {getItems, postItem, putItem, deleteItem} = require('../controllers/itemControllers')

itemRouter.route('/menu').get(getItems)
itemRouter.route('/menu').post(postItem)
itemRouter.route('/menu/:id').put(putItem).delete(deleteItem)

module.exports = itemRouter