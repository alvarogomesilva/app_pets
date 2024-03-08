const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))

app.listen(5000, () => console.log('Server is listening! - PORT: 5000'))