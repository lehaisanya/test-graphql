const { readFileSync } = require('fs')

const users = JSON.parse(readFileSync('./db/users.json', 'utf-8'))
const articles = JSON.parse(readFileSync('./db/articles.json', 'utf-8'))

module.exports = {
    users,
    articles
}
