const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  coursename: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  semester:{
    type:String,
    required:true
  },
  subjectname:{
    type:String,
    required:true
  }
 
});

module.exports = mongoose.model('Notes', notesSchema);
