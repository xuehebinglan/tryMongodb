/* eslint-disable no-console */
var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/abc';
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var kittySchema = mongoose.Schema({
  type: String,
  goods: Array,
  topping: Array
});

const menu2 = {
  type: 'icecream',
  goods: [{
    name: 'Organic Soft Serve Ice Cream',
    style: ['Vanilla Bean', 'Chocolate', 'Vanilla Chocolate Twirl']
  }, {
    name: 'Mitchell’s Ice Cream',
    style: ['Strawberry', 'Oreo Cookie', 'Thin Mint']
  }, {
    name: 'Pop Nation Popsicles',
    style: []
  }, {
    name: 'Frozen Banana Dip In Dark Chocolate',
    style: []
  }, {
    name: 'Ice Cream Float',
    style: ['Root Beer Float', 'Cream Soda Float']
  }, {
    name: 'Sundae',
    style: ['Regular Sundae', 'Toffee Crunch Sundae', 'HoneyComb Dream Sundae']
  }],
  topping: [{
    type: 'Regular Topping',
    goods: ['Toasted Almond', 'Rainbow Sprinkle', 'Chocolate Sprinkle', 'Chocolate Chip']
  }, {
    type: 'Housemake Topping',
    goods: ['Toffee Pieces', 'Honeycomb Candy', 'Chocolate Sauce', 'Butterscotch']
  }]
}

// // NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

var Kitten = mongoose.model('Kitten', kittySchema);
// var menu = new Kitten(menu2);
// menu.save(function (err, menu2) {
//   if (err) return console.error(err);
//   // console.log(menu2)
// });

Kitten.find({ type: /^icecream/ }, (err, res) => {
  if (err) return console.err(err)
  console.log(res)
});
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name);
// silence.speak()

// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });