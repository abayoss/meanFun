const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const militaryBaseSchema = new Schema({
  name: String,
  location: String,
  image: String,
  background: String
});
module.exports = mongoose.model('militaryBase', militaryBaseSchema);
