const mongoose = require('../../databases/connection')
const schema = require('./schema')

const Pet = mongoose.model('Pet', schema)

module.exports = Pet