const router = require("express").Router();
const assignStudent = require("../models/mentor");

router.route("/").put((req, res) => {
  assignStudent
    .findOneAndUpdate(
      { name: req.body.name },
      { $addToSet: { students: { $each: req.body.students } } },
      { unique: true }
    )
    .then((student) => res.json(student))
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

module.exports = router;
