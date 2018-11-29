const {mongoose} = require('../db/mongoose'); 

const Todo = mongoose.model('todo', {
    text: {
        type: String
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