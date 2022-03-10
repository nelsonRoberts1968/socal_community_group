const mongoose = require('mongoose');

const { Schema } = mongoose;

const membershipSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    required: true
  },
  dues: {
    type: Number,
    required: true,
    min: 0.99
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  }
 
});

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;
