const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

// let _id = "5c026f0d0ec4211124100c7c";

// if (!ObjectID.isValid(_id)) {
//     console.log('Id is not valid');
// }

// Todo.find({_id}).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({_id}).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(_id).then((todo) => {
//     console.log('Todo by ID: ', todo);
// }).catch((e) => console.log(e));

User.findById("5c02763796ccb8245c08a071").then((user) => {
    if (!user) {
        return console.log('Unable to find the user');
    }
    
    console.log('User: ', user);
}, (e) => {
    console.log(e);
});