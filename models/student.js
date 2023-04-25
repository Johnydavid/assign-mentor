const mongoose = require("mongoose");

// Derive a Schema

const StudentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mentor: { type: String, required: true },
  course: { type: String, required: true },
});

// compile schema to model

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
