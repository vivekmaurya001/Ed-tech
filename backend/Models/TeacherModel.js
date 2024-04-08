const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeacherModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Field: {
      type: String,
      enum: [
        "Data Science",
        "Machine Learning",
        "Web Development",
        "Computer Science",
        "Information Technology",
      ],
      required: true,
    },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

const Teacher = mongoose.model("Teacher", TeacherModel);

module.exports = Teacher;
