const { AuthenticationError } = require('apollo-server-errors');
const { Restaurant } = require('../../models');
const { signToken } = require('../../utils/auth');


const restaurantResolver = {
    Query: {
        getRestaurant: async (parent, args, context) => {
            const { _id } = args;
            const restaurant = await Restaurant.findById(_id).populate('reviews').populate('author').populate('favourite');
            return restaurant;
        },
        getAllRestaurants: async (parent, args, context) => {
            const restaurants = await Restaurant.find({}).populate('reviews').populate('favourite').populate('author');
            return restaurants
        },
    },
    Mutation: {
        addRestaurant: async (parent, args, context) => {
            // const { name, address, postcode } = args
            if (context.user) {
                const newRestaurant = new Restaurant({
                    name: args.name,
                    address: args.address,
                    postcode: args.postcode,
                    author: context.user._id
                })

                const restaurant = await newRestaurant.save();
                console.log(restaurant);
                return restaurant
            }

            throw new AuthenticationError('Not logged in');

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
        },
        addWishlist: async (parent, args, context) => {
            if (context.user) {
                const updatedRestaurant = await Restaurant.findById(args._id);
                const wishlistId = context.user._id;

                // checks if the user already had added the restaurant at its wishlist
                if (updatedRestaurant.wishlist.includes(context.user._id)) {
                    const index = updatedRestaurant.wishlist.indexOf(context.user._id);
                    console.log(index);
                    if (index > -1) {
                        updatedRestaurant.wishlist.splice(index, 1)
                        updatedRestaurant.save();
                    }

                } else {
                    updatedRestaurant.wishlist.push(wishlistId);

                    updatedRestaurant.save();
                }

                return updatedRestaurant;
            }

            throw new AuthenticationError('Not logged in');
        },
        addFavourite: async (parent, args, context) => {
            if (context.user) {
                const updatedRestaurant = await Restaurant.findById(args._id);
                const favoriteId = context.user._id;

                // checks if the user already had added the restaurant at its wishlist
                if (updatedRestaurant.favourite.includes(context.user._id)) {
                    const index = updatedRestaurant.favourite.indexOf(context.user._id);

                    if (index > -1) {
                        updatedRestaurant.favourite.splice(index, 1)
                        updatedRestaurant.save();
                    }

                } else {
                    updatedRestaurant.favourite.push(favoriteId);

                    updatedRestaurant.save();
                }

                return updatedRestaurant;
            }

            throw new AuthenticationError('Not logged in');
        }
    }
}

module.exports = restaurantResolver;