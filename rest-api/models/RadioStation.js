const mongoose = require("mongoose");
const uuid = require("uuidv4");

const radioStationSchema = mongoose.Schema({
  // _id: {
  //   required: true,
  //   type: String,
  //   default: function genUUID() {
  //     return uuid();
  //   },
  // },
  title: {
    type: String,
    required: true,
  },
  genre:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("RadioStations", radioStationSchema);
