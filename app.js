var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/abc';
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    a_date: Date
});

var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

var awesome_instance = new SomeModel({ name: 'awesome' });
awesome_instance.save(function (err) {
  if (err) return console.log(err);
  // saved!
});

console.log('??????', awesome_instance.name); //should log 'also_awesome'

awesome_instance.name="New cool name";
awesome_instance.update(function (err) {
  if (err) return console.log(err); // saved!
});
