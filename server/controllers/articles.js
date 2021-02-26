const { articles } = require('../db')

const articlesController = {
    allArticles () {
        return articles
    },
    findArticleById (id) {
        return articles.find(art => art.id === id)
    },
    findArticlesByAuthorId (id) {
        return articles.filter(art => art.author === id)
    }
}

module.exports = articlesController
