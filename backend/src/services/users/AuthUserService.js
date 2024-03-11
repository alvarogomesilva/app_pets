const createUserToken = require('../../utils/createUserToken')
const User = require('../../models/users/User');
const bcrypt = require('bcrypt')

const AuthUserService = async (email, password) => {
    try {
        const userExists = await User.findOne({ email: email })

        if (!userExists) return { message: 'Email/senha inválidos!' }
        const passwordMatch = await bcrypt.compare(password, userExists.password)
        if (!passwordMatch) return { message: 'Email/senha inválidos!' }

        const token = await createUserToken(userExists)
        return { token, message: 'Você está autenticado!', userId: userExists.id }
    } catch (error) {
        console.log(error)
    }

}

module.exports = AuthUserService;