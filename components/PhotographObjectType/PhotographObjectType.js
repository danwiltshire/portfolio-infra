const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql

const additionalURLsType = new GraphQLObjectType({
  name: 'additionalURLs',
  fields: {
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    icon: { type: GraphQLString },
    color: { type: GraphQLString }
  }
})

const PhotographObjectType =  new GraphQLObjectType({
  name: 'photograph',
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    smallImgSrc: { type: GraphQLString },
    largeImgSrc: { type: GraphQLString },
    additionalURLs: { type: new GraphQLList(additionalURLsType) }
  }
})

module.exports = PhotographObjectType