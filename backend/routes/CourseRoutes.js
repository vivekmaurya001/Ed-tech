const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { protectTeacher } = require("../middleware/teacherMiddleware");
const {
  createCourse,
  fetchCourse,
  fetchallCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseControllers");

const router = express.Router();

//for creating course for teacher
router.route("/").post(protectTeacher, createCourse);
//for fetching course using keyword for user
router.route("/").get(fetchCourse);
//for fetching all chats
router.route("/fetch").get(fetchallCourse);
//for updating a course for teacher
router.route("/fetch").put(protectTeacher, updateCourse);
//for deleting a course  for teacher
router.route("/coursedelete").delete(protectTeacher, deleteCourse);

module.exports = router;
