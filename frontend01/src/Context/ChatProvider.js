import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

export const ChatState = () => {
  return useContext(ChatContext);
};

const ChatProvider = ({ children }) => {
  const [clicked, setClicked] = useState("Userdetails");
  const [selctedCourse, setSelctedCourse] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [Notification, setNotification] = useState([]);
  const [NotificationSenderName, setNotificationSenderName] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
  ]);
  const [totalCourses, setTotalCourses] = useState([
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
    {
      name: "Introduction to Python Programming",
      Creater: "615c6e1a9e8e6a001f8e4a3b", // Example teacher ID
      Vedios: [
        {
          ModuleName: "Module 1",
          VedioName: "Getting Started with Python",
        },
        {
          ModuleName: "Module 2",
          VedioName: "Variables and Data Types",
        },
      ],
      Hours: 10,
      Details: {
        Benefits: "Learn Python programming from scratch",
        About: "This course covers the basics of Python programming language.",
        Language: "English",
        Domain: "Programming",
        Price: 49.99,
      },
      pic: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1",
      date: "2023-01-05",
    },
  ]);
  const [chats, setChats] = useState([
    {
      isGroupChat: false,
      users: [
        {
          name: "John Doe",
          email: "john@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "John Doe",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Guest User",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Anthony",
          email: "anthony@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Anthony",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Jane Doe",
          email: "jane@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Jane Doe",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Chill Zone",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
  ]);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, []);

  const value = {
    clicked,
    setClicked,
    enrolledCourses,
    setEnrolledCourses,
    totalCourses,
    setTotalCourses,
    selctedCourse,
    setSelctedCourse,
    user,
    setUser,
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    Notification,
    setNotification,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
