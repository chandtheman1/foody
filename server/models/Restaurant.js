const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User')

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50,
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    postcode: {
        type: Number,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
    },
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    favourite: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;