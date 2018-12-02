const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/users');
const {Todo} = require('./models/todos');

const PORT = process.env.PORT || 3000;

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
        if(!todo) {
            res.status(404).send();
        }

        res.send({todo});
    }, (e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    let _id = req.params.id;

    if(!ObjectID.isValid(_id)) {
        res.status(404).send();
    }

    Todo.findByIdAndDelete(_id).then((todo) => {
        if(!todo) {
            res.status(404).send();
        }

        res.send({todo});
    }, (e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    let _id = req.params.id;
    let body = _.pick(req.body, ["text", "completed"]);

    if(!ObjectID.isValid(_id)) {
        res.status(404).send();
    }

    if (body.completed === true) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null
    }

    Todo.findByIdAndUpdate(_id, {$set: body}, {new: true}).then((doc) => {
        if (!doc) {
            return res.status(404).send();
        }

        res.send({doc});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(PORT, () => {
    console.log(`App is litening on port ${PORT}`);
});

module.exports = {app}