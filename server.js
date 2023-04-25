const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mentorRoutes = require("./routes/mentor");
const studentRoutes = require("./routes/student");
const assignStudentRoutes = require("./routes/assignStudent");
const assignMentorRoutes = require("./routes/assignMentor");
const showAllStudentsRoutes = require("./routes/showallStudents")

require("dotenv").config();

const port = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

// Database Connection
connection();

// Routes

app.use("/api/mentor", mentorRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/assignstudent", assignStudentRoutes);
app.use("/api/assignmentor", assignMentorRoutes);
app.use("/api/showall", showAllStudentsRoutes);
