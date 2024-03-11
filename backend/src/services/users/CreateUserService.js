const bcrypt = require('bcrypt')
const User = require('../../models/users/User')

const CreateUserService = async (name, email, phone, password) => {
    const passwordHash = await bcrypt.hash(password, 8)
    try {
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash
        })
        await user.save()

        return { message: 'Criado com sucesso!' }
    } catch (error) {
        console.log(error)
    }
}

module.exports = CreateUserService