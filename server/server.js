const { readFileSync } = require('fs')
const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const schemaText = readFileSync('./schema.graphql', 'utf-8')
const db = JSON.parse(readFileSync('./db.json'))
const { users, articles } = db

const schema = buildSchema(schemaText)

const author = (authorId) => () => usersMap(users.find(user => user.id === authorId))
const articlesOfUser = (userId) => () => articles
    .filter(art => art.author === userId)
    .map(articlesMap)
const articlesCount = (userId) => () => articles
    .filter(art => art.author === userId)
    .length

const usersMap = user => ({
    ...user,
    articlesCount: articlesCount(user.id),
    articles: articlesOfUser(user.id)
})

const articlesMap = art => ({
    ...art,
    author: author(art.author)
})

const rootValue = {
    getAllUsers: () => users.map(usersMap),
    getAllArticles: () => articles.map(articlesMap),
    getUserByNickname: ({ nickname }) => {
        const user = users.find(user => user.nickname === nickname)
        return usersMap(user)
    },
    getArticleById: ({ id }) => {
        id = parseInt(id)
        const article = articles.find(art => art.id === id)
        return articlesMap(article)
    }
}

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
