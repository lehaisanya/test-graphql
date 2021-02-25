import React from 'react'
import { useQuery } from '@apollo/client'
import { GetAllUsers } from 'types'
import { GET_ALL_USERS } from 'querys'
import { Link } from 'react-router-dom'

function Users() {
    const { loading, error, data } = useQuery<GetAllUsers>(GET_ALL_USERS)
console.log(GET_ALL_USERS)
    if (error) return <div>Error</div>
    if (loading || !data) return <div>Loading...</div>

    return (
        <div>
            {
                data.users.map(user => <div key={user.id} className="user">
                    <div>{user.nickname}</div>
                    <div>{user.name}</div>
                    <div>{user.articlesCount}</div>
                    <div><Link to={`/${user.nickname}`}>Go to</Link></div>
                </div>)
            }
        </div>
    )
}

export default Users
