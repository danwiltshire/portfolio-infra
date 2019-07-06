const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql

const DesignObjectType =  new GraphQLObjectType({
  name: 'design',
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    smallImgSrc: { type: GraphQLString },
    largeImgSrc: { type: GraphQLString }
  }
})

module.exports = DesignObjectType