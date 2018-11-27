const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to db');

    // db.collection('ToDos').find({done: true}).toArray().then((res) => {
    //     console.log(JSON.stringify(res, undefined, 2));
    // }, (err) => {
    //     console.log(err)
    // })

    db.collection('Users').find({
        user1: {name: 'Hayk'}
    }).toArray().then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log(err)
    })

    // db.close();
})