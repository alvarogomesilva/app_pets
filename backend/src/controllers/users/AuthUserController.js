const AuthUserService = require('../../services/users/AuthUserService')
const loginUserValidation = require('../../validations/users/loginUserValidation')

const AuthUserController = async (req, res) => {
    const { email, password } = req.body
    const validations = await loginUserValidation(req.body)

    if (validations) return res.status(422).json(validations)

    const user = await AuthUserService(email, password)
    return res.json(user)
}

module.exports = AuthUserController;