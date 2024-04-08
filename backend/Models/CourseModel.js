const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Creater: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
    Vedios: [
      {
        ModuleName: {
          type: String,
          default: "Module",
        },
        VedioName: {
          type: String,
          required: true,
        },
      },
    ],
    Hours: {
      type: Number,
    },
    Details: {
      Benefits: {
        type: String,
      },
      About: {
        type: String,
      },
      Language: {
        type: String,
      },
      Domain: {
        type: String,
      },
      Price: {
        type: Number,
        default: 0,
      },
    },
    pic: {
      type: String,
      default:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
    },
    date: {
      type: String,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CourseModel);

module.exports = Course;
