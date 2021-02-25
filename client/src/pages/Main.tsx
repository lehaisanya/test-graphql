import React from 'react'
import { useQuery } from '@apollo/client'
import ArticleItem from 'components/ArticleItem'
import { GetAllArticles } from 'types'
import { GET_ALL_ARTICLES } from 'querys'

function Main() {
    const { data, loading, error } = useQuery<GetAllArticles>(GET_ALL_ARTICLES)
    
    if (error) return <div>Error</div>
    if (loading || !data) return <div>Loading...</div>
    
    return (
        <div>
            {data.articles.map(article => <ArticleItem key={article.id} article={article} />)}
        </div>
    )
}

export default Main
