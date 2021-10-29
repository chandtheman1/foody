const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;