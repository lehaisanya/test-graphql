const express = require('express')
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const graphqlOptions = require('./schema')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(session({
    secret: 'SESSION SECRET',
    resave: false,
    saveUninitialized: true
}))
app.use('/graphql', graphqlHTTP(graphqlOptions))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
