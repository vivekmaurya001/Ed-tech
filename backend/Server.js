const connectToMongo = require("./db");
const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config();
const data = require("./data/data");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const TeacherRoutes = require("./routes/TeacherRoutes");
const CourseRoutes = require("./routes/CourseRoutes");
const { Socket } = require("socket.io");
const path = require("path");

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/teacher", TeacherRoutes);
app.use("/api/course", CourseRoutes);

// --------------------------deployment------------------------------

// const __dirname1 = path.resolve();

// console.log("__dirname1:", __dirname1);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend01/build")));

//   console.log(
//     "Resolved path for static assets:",
//     path.join(__dirname1, "frontend01", "build")
//   );

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend01", "build", "index.html"))
//   );
//   console.log(
//     "Resolved path for index.html:",
//     path.resolve(__dirname1, "frontend01", "build", "index.html")
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

// --------------------------deployment------------------------------

//server information
const server = app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

// socket connection for real time messaging
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User joined Room: ", room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop-typing", (room) => socket.in(room).emit("stop-typing"));

  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.Chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user === newMessageReceived.sender) return;

      socket.in(user).emit("message received", newMessageReceived);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
