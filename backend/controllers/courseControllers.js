const asyncHandler = require("express-async-handler");
const CourseModel = require("../Models/CourseModel");
const User = require("../Models/User");
const Teacher = require("../Models/TeacherModel");

//@description     Create a course
//@route           POST /api/course/
//@access          Protected
const createCourse = asyncHandler(async (req, res) => {
  if (!req.body.Vedios || !req.body.Details) {
    return res.status(400).send({ message: "Please fill all the fields" });
  }

  const { name, pic, Hours } = req.body;

  var Vedios = JSON.parse(req.body.Vedios);
  var Details = JSON.parse(req.body.Details);

  console.log(req.teacher._id);

  try {
    const Course = await CourseModel.create({
      name: name,
      Creater: req.teacher,
      Vedios: Vedios,
      Details: Details,
      Hours: Hours,
      pic: pic,
    });

    res.status(200).json(Course);
  } catch (error) {
    res.json(error.message);
  }
});

//@description     get  course through keyword
//@route           GET /api/course?search=
//@access          Public
const fetchCourse = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          {
            Details: {
              Domain: { $regex: req.query.search, $options: "i" },
            },
          },
        ],
      }
    : {};

  const courses = await CourseModel.find(keyword).populate(
    "Creater",
    "-password"
  );
  res.send(courses);
});

//@description     fetchallcourse
//@route           GET /api/course/fetch
//@access          Protected
const fetchallCourse = asyncHandler(async (req, res) => {
  try {
    const courses = await CourseModel.find({}).populate("Creater", "-password"); // Empty query to fetch all documents
    res.json(courses);
  } catch (error) {
    res.json(error.message);
  }
});

// @desc   updatecourse
// @route   PUT /api/course/
// @access  Protected
const updateCourse = asyncHandler(async (req, res) => {
  const { name, pic, Hours, CourseId } = req.body;

  const updatedCourse = await CourseModel.findByIdAndUpdate(
    CourseId,
    {
      $set: {
        name: name,
        pic: pic,
        Hours: Hours,
      },
    },
    { new: true }
  ).populate("Creater", "-password");

  if (req.body.Vedios) {
    let Vedios = JSON.parse(req.body.Vedios);
    updatedCourse = await CourseModel.findByIdAndUpdate(
      CourseId,
      {
        $set: {
          Vedios: Vedios,
        },
      },
      { new: true }
    ).populate("Creater", "-password");
  }

  if (!updatedCourse) {
    res.status(404), json("Chat Not Found");
  } else {
    res.json(updatedCourse);
  }
});

//for group only
const deleteCourse = asyncHandler(async (req, res) => {
  const { CourseId } = req.body;

  const removed = await CourseModel.findByIdAndDelete({ _id: CourseId });

  if (!removed) {
    res.status(404), json("Chat Not Found");
  } else {
    res.json(removed);
  }
});

module.exports = {
  createCourse,
  fetchCourse,
  fetchallCourse,
  updateCourse,
  deleteCourse,
};
