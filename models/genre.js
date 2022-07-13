const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    title: {type: String, required: true},
    
  }
);

// Virtual for book's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
