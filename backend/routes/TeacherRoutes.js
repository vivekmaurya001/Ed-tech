const express = require("express");
const router = express.Router();
const Teacher = require("../Models/TeacherModel");
// const { query, validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { allTeacher, allCourses } = require("../controllers/teacherControllers");
const { protectTeacher } = require("../middleware/teacherMiddleware");
const JWT_SECRET = "Edtech@5665#";

//ROUTE 1:end point for creating new teacher in db
router.post("/", async (req, res) => {
  let success = false;
  try {
    let teacher = await Teacher.findOne({ email: req.body.email });
    if (teacher) {
      return res
        .status(400)
        .json({ error: "sorry user with this email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    teacher = await Teacher.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      Field: req.body.Field,
      pic: req.body.pic,
    });
    const data = {
      teacher: {
        id: teacher._id,
      },
    };
    const auhToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, auhToken, teacher });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});
//ROUTE 2:authenticating a user using :POST "/api/user/login
router.post("/login", async (req, res) => {
  let success = false;
  const { email, password } = req.body;
  try {
    let teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res
        .status(400)
        .json({ error: "plase try to login with correct credentials" });
    }
    const passwordcompare = await bcrypt.compare(password, teacher.password);
    if (!passwordcompare) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "plase try to login with correct password" });
    }
    const data = {
      teacher: {
        id: teacher._id,
      },
    };
    const auhToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, auhToken, teacher });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});
//ROUTE 3:getting all teachers
router.route("/").get(allTeacher);

//Rote 4: getting all couses of a teacher
router.route("/fetch").get(allCourses);

module.exports = router;
