const { array } = require("joi/lib");
const mongoose = require("mongoose");

// Derive a Schema

const MentorSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  students: { type: [String], required: true },
  course: { type: String, required: true },
});

// compile schema to model

const Mentor = mongoose.model("Mentor", MentorSchema);

module.exports = Mentor;
