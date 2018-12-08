const mongoose = require('mongoose');

//'mongodb://HaykBarca:haykbarca19939563@ds231941.mlab.com:31941/todoapp' || 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://HaykBarca:haykbarca19939563@ds231941.mlab.com:31941/todoapp', { useNewUrlParser: true });

module.exports = {mongoose};