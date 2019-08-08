const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const motorSchema = new Schema({
  model: String,
  type: String,
  image: String,
  details: String,
  technicalDetails: {
    DISPLACEMENT: String,
    POWERINHP: String,
    POWERINKW: String,
    TORQUE: String,
    DESIGN: String,
    STROKE: String
  }
});
module.exports = mongoose.model('motor', motorSchema);
