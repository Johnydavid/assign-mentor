const router = require("express").Router();
const assignMentor = require("../models/student");

router.route("/").put((req, res) => {
  assignMentor
    .findOneAndUpdate({ name: req.body.name }, { mentor: req.body.mentor })
    .then((mentor) => res.json(mentor))
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

module.exports = router;
