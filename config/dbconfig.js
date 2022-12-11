var mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/expressdb');

mongoose.connect('mongodb+srv://expressdb:m33yLWzdDgLxoURV@expressdb.me8ubfd.mongodb.net/expressdb?retryWrites=true&w=majority');

var mongoosedb = module.exports = mongoose;

