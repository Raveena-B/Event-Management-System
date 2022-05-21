const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salarySchema = new Schema({
  employeeId: {
    type: String,
    required: true,
    trim: true,
  },

  employeeName: {
    type: String,
    required: true,
    trim: true,
  },

  date: {
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

const salary = mongoose.model("salary", salarySchema);

module.exports = salary;
