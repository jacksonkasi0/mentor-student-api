const mongoose = require("mongoose");

const Mentor = mongoose.model("mentors",{
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  contact_no: {
    type: Number,
    required: true, 
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  ],
});

module.exports = Mentor;
