const { users } = require('../db')

const usersController = {
    allUsers () {
        return users
    },
    findUserByNickname (nickname) {
        return users.find(user => user.nickname === nickname)
    },
    findUserById (id) {
        return users.find(user => user.id === id)
    }
}

module.exports = usersController
