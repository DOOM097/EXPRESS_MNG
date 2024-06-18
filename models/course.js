const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: String,
  description: { 
    type: String,
    required: true
  }
}, { versionKey: false });  

module.exports = model('Course', courseSchema);
