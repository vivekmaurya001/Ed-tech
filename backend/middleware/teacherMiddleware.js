const jwt = require("jsonwebtoken");
const Teacher = require("../Models/TeacherModel");
const asyncHandler = require("express-async-handler");
const JWT_SECRET = "Edtech@5665#";

const protectTeacher = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, JWT_SECRET);

      req.teacher = await Teacher.findById(decoded.teacher.id).select(
        "-password"
      );

      next();
    } catch (error) {
      res.status(401).json("Not Authorised ,no token");
    }
  }
  if (!token) {
    res.status(401).json("Not authorised ,no token");
  }
});

module.exports = { protectTeacher };
