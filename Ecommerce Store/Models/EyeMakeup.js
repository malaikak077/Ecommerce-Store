const mongoose = require("mongoose");


let EyeMakeupSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
},
  title:  {
    type: String,
    required: true
},
  price: {
    type: Number,
    required: true
},
category:{
  type: String,
  default: 'eye'
}
});
let EyeMakeup = mongoose.model("EyeMakeup", EyeMakeupSchema);
module.exports = EyeMakeup;
