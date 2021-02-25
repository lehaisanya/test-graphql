import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Main from 'pages/Main'
import Users from 'pages/Users'
import User from 'pages/User'
import Error from 'pages/Error'
import Article from 'pages/Article'

function App() {
    return (
        <div>
            <header className="menu">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/users">Users</NavLink>
            </header>
            <div className='container'>

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route exact path="/articles/:id">
                        <Article />
                    </Route>
                    <Route exact path="/error">
                        <Error />
                    </Route>
                    <Route exact path="/:nickname">
                        <User />
                    </Route>
                    <Redirect to="/error" />
                </Switch>
            </div>
        </div>
    )
}

export default App
