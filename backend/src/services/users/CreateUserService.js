const bcrypt = require('bcrypt')
const User = require('../../models/users/User')
const createUserToken = require('../../utils/createUserToken')

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
        const token = await createUserToken(user)
        return { token, message: 'Você está autenticado!', userId: user.id }
    } catch (error) {
        console.log(error)
    }
}

module.exports = CreateUserService