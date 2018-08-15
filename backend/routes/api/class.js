const router = require("express").Router();

const ClassModel = require("../../models/Class");
const validateAddClass = require("../../validation/classes/addclass");

// @route   GET api/classes/test
// @desc    Tests classes route
// @access  Private
router.get("/test", (req, res) => res.json({ msg: "Classes route working" }));

// @route   GET api/classes
// @desc    Gets all classes
// @access  Private
router.get("/", (req, res) => {
  ClassModel.find()
    .then(classes => res.json(classes))
    .catch(err => res.status(400).json({ catchErr: err }));
});

// @route   POST api/classes/addclass
// @desc    Creates new class
// @access  Private
router.post("/addclass", (req, res) => {
  const { errors, isValid } = validateAddClass(req.body);

  // Validation Check
  if (!isValid) {
    return res.status(400).json(errors);
  }

  ClassModel.findOne({ name: req.body.name }).then(aClass => {
    if (aClass) {
      errors.name = "Class name already exists";
      return res.status(400).json(errors);
    } else {
      const newClass = new ClassModel({
        name: req.body.name
      });

      newClass
        .save()
        .then(created => res.json(created))
        .catch(err => res.status(400).json({ catchErr: err }));
    }
  });
});

module.exports = router;
