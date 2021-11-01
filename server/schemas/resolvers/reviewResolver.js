const { AuthenticationError } = require('apollo-server-errors');
const { Restaurant, Review } = require('../../models');
const { signToken } = require('../../utils/auth');

const reviewResolver = {
    Query: {
        getReviews: async (parent, args, context) => {
            const { _id } = args;
            const review = await Review.findById(_id).populate('author').populate('restaurantId');
            return review;
        },
    },
    Mutation: {
        addReview: async (parent, args, context) => {

            if (context.user) {
                const newReview = new Review({
                    body: args.body,
                    score: args.score,
                    author: context.user._id,
                    createdAt: new Date().toISOString(),
                    restaurantId: args.restaurantId
                })



                const review = await newReview.save();

                // console.log(review._id);
                // const updatedRestaurant = await Restaurant.findByIdAndUpdate({id: newReview.restaurantId}, {});
                const restaurant = await Restaurant.findById(newReview.restaurantId)
                restaurant.reviews.push(review._id);
                restaurant.save();

                return review
            }



            throw new AuthenticationError('Not logged in');
        },
        // updateReview: async (parent, args, context) => {
        //     const newReview = await Review.findByIdAndUpdate(args._id, args, { new: true })
        //     return new Review
        // },
        deleteReview: async (parent, args, context) => {
            const { _id } = args;
            const deletedReview = await Review.findByIdAndDelete(_id, (err, docs) => {
                if (err) {
                    console.log(err);
                } else {
                    return docs
                }
            })
            return deletedReview;
        }
    }
}

module.exports = reviewResolver;