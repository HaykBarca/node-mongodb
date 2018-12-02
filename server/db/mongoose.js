const mongoose = require('mongoose');

//mongodb://HaykBarca:haykbarca19939563@ds231941.mlab.com:31941/todoapp' || 
mongoose.connect('mongodb://HaykBarca:haykbarca19939563@ds231941.mlab.com:31941/todoapp' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {
    mongoose
}