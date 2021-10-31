// const { Review } = require('../../models');
// const { signToken } = require('../../utils/auth');

// const reviewResolver = {
//     Query: {
//         getReview: async (parent, args, context) => {
//             const { _id } = args;
//             const review = await Review.findById(_id);
//             return review;
//         },
//         getAllReviews: async (parent, args, context) => {
//             const reviews = await Review.find({});
//             return reviews
//         }
//     },
//     Mutation: {
//         addReview: async (parent, args, context) => {
//             const review = await Review.create(args);
//             return review;
//         },
//         updateReview: async (parent, args, context) => {
//             const newReview = await Review.findByIdAndUpdate(args._id, args, { new: true })
//             return new Review
//         },
//         deleteReview: async (parent, args, context) => {
//             const { _id } = args;
//             const deletedReview = await Review.findByIdAndDelete(_id, (err, docs) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     return docs
//                 }
//             })
//             return deletedReview;
//         }
//     }
// }

// module.exports = reviewResolver;