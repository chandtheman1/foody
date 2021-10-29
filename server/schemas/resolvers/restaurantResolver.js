const { Restaurant } = require('../../models');
const { signToken } = require('../../utils/auth');


const restaurantResolver = {
    Query: {
        getRestaurant: async (parent, args, context) => {
            const { _id } = args;
            const restaurant = await Restaurant.findById(_id);
            return restaurant;
        },
        getAllRestaurants: async (parent, args, context) => {
            const restaurants = await Restaurant.find({})
            return restaurants
        },
    },
    Mutation: {
        addRestaurant: async (parent, args, context) => {
            // const { name, address, postcode } = args
            const restaurant = await Restaurant.create(args);

            return restaurant
        },
        updateRestaurant: async (parent, args, context) => {
            const newRestaurant = await Restaurant.findByIdAndUpdate(args._id, args, { new: true })
            return newRestaurant;
        },
        deleteRestaurant: async (parent, args, context) => {
            const { _id } = args;
            const deletedRestaurant = await Restaurant.findByIdAndDelete(_id, (err, docs) => {
                if (err) {
                    console.log(err)
                } else {
                    return docs
                }
            })
            return deletedRestaurant;
        }
    }
}

module.exports = restaurantResolver;