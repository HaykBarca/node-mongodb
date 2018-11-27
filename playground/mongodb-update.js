const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected successfully');

    db.collection('Users').findOneAndUpdate({
        _id: ObjectId("5bfd96d334d7efbe998eada5")
    }, {
        $set: {name: 'Hayk'},
        $inc: {age: 2}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // db.close()
})