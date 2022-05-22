const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentDetailsSchema = new Schema({
  accNo: {
    type: Number,
    required: true,
    trim: true,
  },

  cardType: {
    type: String,
    required: true,
    trim: true,
  },

  cardHolderName: {
    type: String,
    required: true,
    trim: true,
  },

  cardNumber: {
    type: Number,
    required: true,
    trim: true,
  },

  expireDate: {
    type: String,
    required: true,
    trim: true,
  },

  cvv: {
    type: Number,
    required: true,
    trim: true,
  },
});

const paymentDetails = mongoose.model(" PaymentDetails", paymentDetailsSchema);

module.exports = paymentDetails;
