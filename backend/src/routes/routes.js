const express = require('express')
const Route = express.Router()

const CreateUserController = require('../controllers/users/CreateUserController')
const AuthUserController = require('../controllers/users/AuthUserController')

Route.post('/users/create', CreateUserController)
Route.post('/users/login', AuthUserController)

module.exports = Route