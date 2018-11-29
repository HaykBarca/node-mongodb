const {mongoose} = require('../db/mongoose');

const User = mongoose.model('user', {
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
});

module.exports = {
    User
};