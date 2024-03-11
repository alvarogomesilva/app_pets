
const loginUserValidation = async (body) => {
    const { email, password } = body

    if (!email) return { message: 'O email é obrigatório!' }
    if (!password) return { message: 'O password é obrigatório!' }
}

module.exports = loginUserValidation;