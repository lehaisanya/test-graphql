import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Article } from 'types'

interface ArticleItemProps {
    article: Article
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
    return (
        <div className="article">
            <div><Link to={`/${article.author.nickname}`}>@{article.author.nickname}</Link></div>
            <div>{article.title}</div>
            <div><Link to={`/articles/${article.id}`}>Go to</Link></div>
        </div>
    )
}

export default ArticleItem
