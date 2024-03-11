const CreateUserService = require('../../services/users/CreateUserService')
const createUserValidation = require('../../validations/users/createUserValidation')

const CreateUserController = async (req, res) => {
    const {name, email, phone, password, confirmPassword} = req.body
    const validations = await createUserValidation(req.body)

    if (validations) return res.status(422).json(validations)

    const user = await CreateUserService(name, email, phone, password)
    return res.json(user)
}

module.exports = CreateUserController; 