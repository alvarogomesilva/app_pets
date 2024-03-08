const mongoose = require('../../databases/connection')
const schema = require('./schema')

const User = mongoose.model('User', schema)

module.exports = User