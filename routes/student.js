const router = require("express").Router();
const Students = require("../models/student");

// Create Operation

router.route("/").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mentor = req.body.mentor;
  const course = req.body.course;

  const newStudent = new Students({
    name,
    email,
    mentor,
    course,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student created");
    })
    .catch((error) => {
      res.status(400).json("Error:" + error);
    });
});

module.exports = router;
