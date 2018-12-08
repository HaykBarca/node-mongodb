const {ObjectID} = require('mongodb');

const Todo = require('./../../models/todos');

const todos = [{
    _id: new ObjectID(),
    text: 'First to do'
},
{
    _id: new ObjectID(),
    text: 'Second to do',
    completed: true,
    completedAt: 123
}];

const populateTodo = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {todos, populateTodo}