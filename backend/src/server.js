const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))

app.use(routes)

app.listen(5000, () => console.log('Server is listening! - PORT: 5000'))