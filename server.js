var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');

app.use(express.static(path.join(__dirname, './ninjaGoldAngular/dist')));


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;


var TaskSchema = new mongoose.Schema({
    title: { type: String, required: false },
    desc: { type: String, required: false, default: "" },
    completed: { type: Boolean, default: false }
}, { timestamps: true });


mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'User'
var Task = mongoose.model('Task') // We are retrieving this Schema from our Models, named 'User'

app.listen(8000, function () {
    console.log("listening on port 8000");
})