const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../../models');
const { signToken } = require('../../utils/auth');

const userResolver = {
    Query: {
        getUser: async (parent, args, context) => {
            const { _id } = args;
            // if (context.user) {
            //   const user = await User.findById(context.user._id);
            //   return user;
            // }
            if (args._id) {
                const user = await User.findById(args._id)
                return user
            }

            throw new AuthenticationError('Not logged in');
        },
        getAllUsers: async (parent, args, context) => {
            const users = await User.find({})
            console.log(users);
            return users;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            // args: { email, password, username}
            const user = await User.create(args);

            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    }
}

module.exports = userResolver;