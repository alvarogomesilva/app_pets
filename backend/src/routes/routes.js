const express = require('express')
const Route = express.Router()

const CreateUserController = require('../controllers/users/CreateUserController')

Route.post('/users/create', CreateUserController)

module.exports = Route