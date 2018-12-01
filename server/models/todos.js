const {mongoose} = require('../db/mongoose'); 

const Todo = mongoose.model('todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    } 
});

module.exports = {
    Todo
};