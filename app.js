/* eslint-disable no-console */
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/20190508';
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connect the database')
});
// var menuSchema = new mongoose.Schema({
//   type: String,
//   goods: Array,
//   toppings: Array
// });

var styleSchema = new mongoose.Schema({
  name: String
});
var goodsSchema = new mongoose.Schema({
  name: String,
  style: [String]
});
var menuSchema = new mongoose.Schema({
  type: String,
  goods: [goodsSchema],
  toppings: [goodsSchema]
});


const menuData = {
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
    name: 'Regular Topping',
    style: ['Toasted Almond', 'Rainbow Sprinkle', 'Chocolate Sprinkle', 'Chocolate Chip']
  }, {
    name: 'Housemake Topping',
    style: ['Toffee Pieces', 'Honeycomb Candy', 'Chocolate Sauce', 'Butterscotch']
  }]
}

var menuTable = mongoose.model('menu', menuSchema);
var menu = new menuTable(menuData);
menu.save(function (err, menu2) {
  if (err) return console.error(err);
  // console.log(menu2)
});

menuTable.find({
  type: /^icecream/,
  goods: {
    $elemMatch: {
      name: 'Organic Soft Serve Ice Cream'
    }
  }
 })
.then((res) => {
  console.log('1111111111', res[0])
  console.log('22222222222', res[1])
})

