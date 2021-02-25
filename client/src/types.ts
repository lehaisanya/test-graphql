export interface User {
    id: number
    nickname: string
    name: string
    age: number
    articlesCount: number
    articles: Article[]
}

export interface Article {
    id: number
    title: string
    author: User
    text: string
}

export interface GetAllArticles {
    articles: Article[]
}

export interface GetAllUsers {
    users: User[]
}

export interface GetUserByNickname {
    user: User
}

export interface GetArticleById {
    article: Article
}