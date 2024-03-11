const User = require('../../models/users/User');

const validationUser = async (body) => {
    const {name, email, phone, password, confirmPassword} = body

    if (!name) return { message: 'O nome é obrigatório!' }
    if (!email) return { message: 'O email é obrigatório!' }
    if (!phone) return { message: 'O telefone é obrigatório!' }
    if (!password) return { message: 'O password é obrigatório!' }
    if (password.length < 6) return { message: 'A senha precisa ter no mínimo 6 caracteres!' }
    if (!confirmPassword) return { message: 'A confirmação da senha é obrigatório!' }
    if (password !== confirmPassword) return { message: 'As senhas precisam ser iguais!' }

    const userExists = await User.findOne({email: email})
    if (userExists) return { message: 'Por favor utilize outro e-mail!' }
}

module.exports = validationUser;