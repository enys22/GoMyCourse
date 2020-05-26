const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  id_cour: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = Video = mongoose.model("video", VideoSchema);
