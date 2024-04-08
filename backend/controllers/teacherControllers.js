const asyncHandler = require("express-async-handler");
const Teacher = require("../Models/TeacherModel");
const CourseModel = require("../Models/CourseModel");

//@description     Get or Search all users
//@route           GET /api/teacher?search=
//@access          Public
const allTeacher = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await Teacher.find(keyword);
  res.send(users);
});

//@description     Fetch all courses for a teacher
//@route           GET /api/chat/
//@access          Protected
const allCourses = asyncHandler(async (req, res) => {
  const { teacherId } = req.body;

  try {
    const results = await CourseModel.find({
      Creater: teacherId,
    });

    res.status(200).json(results);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = { allTeacher, allCourses };
