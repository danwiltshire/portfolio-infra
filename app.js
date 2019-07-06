'use strict';

const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')

const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})