const jwt = require('jsonwebtoken')

const createUserToken = async (user) => {
    const token = jwt.sign({
        name: user.name,
        id: user.id,
    }, 'd3d724182e377f42393c8be07ff3d72b')

    return token;
}

module.exports = createUserToken