const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/users');
const {Todo} = require('./models/todos');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   var todo = new Todo({
       text: req.body.text
   });

   todo.save().then((doc) => {
       res.send(doc);
   }, (err) => {
       res.status(400).send(err);
   });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let _id = req.params.id;

    if (!ObjectID.isValid(_id)) {
        res.status(404).send()
    }

    Todo.findById(_id).then((todo) => {
        res.send(todo);
    }, (e) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('App is litening on port 3000');
});

module.exports = {app}