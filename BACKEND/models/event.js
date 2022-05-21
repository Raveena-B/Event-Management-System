const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventId: {
    type: String,
    required: true,
    trim: true,
  },

  eventName: {
    type: String,
    required: true,
    trim: true,
  },

  amount: {
    type: Number,
    required: true,
    trim: true,
  },
});

const event = mongoose.model("event", eventSchema);

module.exports = event;
