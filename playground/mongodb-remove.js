const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

let _id = "5c02944e52c0f415b4823b2c";

//Todo.remove()
//Todo.findOneAndRemove()

Todo.findByIdAndRemove(_id).then((doc) => {
    console.log(doc);
});