const { readFileSync } = require('fs')
const { buildSchema } = require('graphql')
const users = require('./controllers/users')
const articles = require('./controllers/articles')

const schema = buildSchema(readFileSync('./schema.gql', 'utf-8'))

const usersMap = user => ({
    ...user,
    articlesCount: () => articles
        .findArticlesByAuthorId(user.id)
        .length,
    articles: () => articles
        .findArticlesByAuthorId(user.id)
        .map(articlesMap)
})

const articlesMap = art => ({
    ...art,
    author: () => usersMap(users.findUserById(art.author))
})

const loginData = {
    pass: 'pass'
}

const rootValue = {
    getAllUsers: () => {
        return users.allUsers()
            .map(usersMap)
    },
    getAllArticles: () => {
        return articles.allArticles()
            .map(articlesMap)
    },
    getUserByNickname: ({ nickname }) => {
        const user = users.findUserByNickname(nickname)
        return usersMap(user)
    },
    getArticleById: ({ id }) => {
        const article = articles.findArticleById(parseInt(id))
        return articlesMap(article)
    },
    
    login: ({ nickname, password }, req) => {
        // Симулируем авторизацию
        if (password !== loginData.pass) return null
        const user = users.find(user => user.nickname === nickname)

        req.session.userId = user.id
        console.log(req.session)

        return usersMap(user)
    }
}

const graphqlOptions = {
    schema,
    rootValue,
    graphiql: true
}

module.exports = graphqlOptions
