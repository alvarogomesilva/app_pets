const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        const password = encodeURIComponent('Estudar@2024');
        await mongoose.connect(`mongodb+srv://root:${password}@pets.tvhc3aq.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Connectado com sucesso!')
    } catch (error) {
        console.log(error)
    }
    
}

connectDatabase()
    .catch((error) => console.log(error))

module.exports = mongoose