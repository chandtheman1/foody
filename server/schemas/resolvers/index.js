const restaurantResolver = require('./restaurantResolver');
const userResolver = require('./userResolver');
const reviewResolver = require('./reviewResolver');

module.exports = {
    Query: {
        ...userResolver.Query,
        ...restaurantResolver.Query,
        ...reviewResolver.Query,
    },
    Mutation: {
        ...userResolver.Mutation,
        ...restaurantResolver.Mutation,
        ...reviewResolver.Mutation
    }
}