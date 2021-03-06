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
        sparse: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    postcode: {
        type: String,
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
    ],
    img: {
        data: Buffer,
        contentType: String
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;