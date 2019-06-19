mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  { type: String },
  { data: Object },
  { timestamps: true }
);

const event = mongoose.model("Event", eventSchema);

module.exports = {
  event
};
