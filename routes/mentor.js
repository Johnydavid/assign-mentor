const router = require("express").Router();
const Mentors = require("../models/mentor");

// Create Operation

router.route("/").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const students = req.body.students;
  const course = req.body.course;

  const newMentor = new Mentors({
    name,
    email,
    students,
    course,
  });

  newMentor
    .save()
    .then((mentor) => {
      res.json("Mentor Created");
      //   res.json(mentor);
    })
    .catch((error) => {
      res.status(400).json("Error:" + error);
    });
});

module.exports = router;
