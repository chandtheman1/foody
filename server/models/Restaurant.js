const mongoose = require('mongoose');

const { Schema } = mongoose;

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
    wishlist: [
        {
            username: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
            createdAt: String,
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