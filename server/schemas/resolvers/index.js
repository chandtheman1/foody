const restaurantResolver = require('./restaurantResolver');
const userResolver = require('./userResolver');

module.exports = {
    Query: {
        ...userResolver.Query,
        ...restaurantResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...restaurantResolver.Mutation
    }
}