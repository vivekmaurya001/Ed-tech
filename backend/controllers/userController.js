const asyncHandler = require("express-async-handler");
const User = require("../Models/User");
const CourseModel = require("../Models/CourseModel");

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword);
  res.send(users);
});

//@description     update user details
//@route           PUT /api/user/update
//@access          only user
const UpdateUser = asyncHandler(async (req, res) => {
  const { name, email, courseId, courseIdforVedio } = req.body;

  let user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: { name: name, email: email } },
    { new: true }
  );
  console.log(req.user._id);
  if (courseId) {
    if (!user.enrolledcourses.includes(courseId)) {
      user.enrolledcourses.push(courseId); // Append the new course ID
      user.VediosCompleted.push({
        courseId: courseId,
        vedios: 0,
      });
      await user.save();
      user = await User.findById(req.user._id).populate("enrolledcourses");
    } else {
      res.json("course already enrolled");
    }
  }

  // const number = await CourseModel.find({ _id: courseIdforVedio });

  if (courseIdforVedio) {
    const index = user.VediosCompleted.findIndex(
      (course) => course.courseId === courseIdforVedio
    );

    if (index >= 0) {
      user.VediosCompleted[index].vedios++;
      await user.save();
      user = await User.findById(req.user._id).populate("enrolledcourses");
    }
  }

  if (!user) {
    return "User not found";
  } else {
    res.json(user);
  }
});

module.exports = { allUsers, UpdateUser };
