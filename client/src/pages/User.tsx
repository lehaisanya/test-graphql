import React from 'react'
import { useQuery } from '@apollo/client'
import { Link, Redirect, useParams } from 'react-router-dom'
import { GetUserByNickname } from 'types'
import { GET_USER_BY_NICKNAME } from 'querys'

interface Params {
    nickname: string
}

function User() {
    const { nickname } = useParams<Params>()
    const { loading, error, data } = useQuery<GetUserByNickname>(GET_USER_BY_NICKNAME, { variables: { nickname }})

    if (error) return <Redirect to="/error" />
    if (loading || !data) return <div>Loading...</div>

    return (
        <div>
            <div>
                <div><h1>@{data.user.nickname}</h1></div>
                <div>Full name: {data.user.name}</div>
                <div>Age: {data.user.age}</div>
                <div>Articles count: {data.user.articlesCount}</div>
                <div>Articles:</div>
                <div className="user-articles">
                    {data.user.articles.map(art => <div key={art.id}>
                        <div>{art.title}</div>
                        <div><Link to={`/articles/${art.id}`}>Go to</Link></div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default User
