const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(3000, () => {
    console.log('App is litening on port 3000');
});

module.exports = {
    app
}