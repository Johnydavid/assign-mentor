const router = require("express").Router();
const showStudents = require("../models/mentor");

router.route("/").get((req, res) => {
  showStudents
    .find({ name: req.body.name }, { _id: 0, name: 0, email: 0, course: 0 })
    .then((students) => res.json(students))
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

module.exports = router;
