const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLList } = graphql

// Photographs
const PhotographObjectType = require('./components/PhotographObjectType')
const PhotographData = require('./components/PhotographData')

// Design
const DesignObjectType = require('./components/DesignObjectType')
const DesignData = require('./components/DesignData')

const queryType =  new GraphQLObjectType({
  name: 'Query',
  fields: {
    photographs: {
      type: new GraphQLList(PhotographObjectType),
      resolve: () => {
        return PhotographData
      }
    },
    designs: {
      type: new GraphQLList(DesignObjectType),
      resolve: () => {
        return DesignData
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema