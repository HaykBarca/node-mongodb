// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect: ', err);
    }
    console.log('Connected to database');

    // db.collection('ToDos').insertOne({
    //     todo: 'Learn NodeJS',
    //     done: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert: ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     user1: {
    //         name: 'Hayk',
    //         age: 25
    //     },
    //     user2: {
    //         name: 'Vahe',
    //         age: 23
    //     }
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable: ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
})