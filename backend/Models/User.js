const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema(
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
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    enrolledcourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    VediosCompleted: [
      {
        courseId: {
          type: String,
        },
        vedios: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);

module.exports = User;
