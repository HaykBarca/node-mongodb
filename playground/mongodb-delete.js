const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected successfully');

    //delete many
    // db.collection('Users').deleteMany({name: 'Hayk'}).then((result) => {
    //     console.log(result);
    // });


    //delte one and return
    db.collection('Users').findOneAndDelete({name: 'Andrew'}).then((result) => {
        console.log(result);
    });

    // db.close()
})