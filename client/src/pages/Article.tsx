import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ARTICLE_BY_ID } from 'querys'
import { GetArticleById } from 'types'
import { Link, useParams } from 'react-router-dom'

interface Params {
    id: string
}

function Article() {
    const { id } = useParams<Params>()
    const { loading, error, data } = useQuery<GetArticleById>(GET_ARTICLE_BY_ID, { variables: { id: parseInt(id) } })

    if (error) return <div>Error</div>
    if (loading || !data) return <div>Loading...</div>

    return (
        <div>
            <div className="article-header">
                <div><Link to={`/${data.article.author.nickname}`}>@{data.article.author.nickname}</Link></div>
                <div>{data.article.title}</div>
            </div>
            
            <div className="article-body">{data.article.text}</div>
        </div>
    )
}

export default Article
