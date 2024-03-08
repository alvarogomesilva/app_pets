const mongoose = require('mongoose')

async function connection() {
    try {
        await mongoose.connect('mongodb+srv://alvarohenriquegomesdasilva:@pets.tvhc3aq.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connectado com sucesso!')
    } catch (error) {
        console.log(error)
    }
    
}

connection()
    .catch((error) => console.log(error))

module.exports = mongoose