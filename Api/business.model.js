const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Business = new Schema({
  photo: {
    type: String,
    required:true
  },
  pname: {
    type: String
  },
  price: {
    type: Number
  },
  desc:{
    type: String
  },
  offer:{
    type: String
  },
  delivery:{
    type:String
  },
  inCart:{
    type:Boolean,
    required:true
  },
  Total:{
    type:Number
  },
  count:{
    type:Number
  }
},{
    collection: 'productdetail'
});

module.exports = mongoose.model('Business',Business);
