import React from "react";
import { Box, Stack, Button, Divider } from "@chakra-ui/react";
import { CalendarIcon, ChatIcon, InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";

const Sidebar = () => {
  const { setClicked, clicked } = ChatState();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };
  return (
    <Stack
      mt="2rem"
      w="13%"
      h="95%"
      spacing="1rem"
      bgColor="transparent"
      alignItems="center"
    >
      <Button
        color={clicked === "Userdetails" ? "black" : "white"}
        bgColor={clicked === "Userdetails" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => setClicked("Userdetails")}
      >
        <i class="fas fa-chart-line"></i>
        DashBoard
      </Button>
      <Button
        color={clicked === "CoursesPage" ? "black" : "white"}
        bgColor={clicked === "CoursesPage" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => setClicked("CoursesPage")}
      >
        <CalendarIcon />
        Courses
      </Button>
      <Button
        color={clicked === "AllTeachers" ? "black" : "white"}
        bgColor={clicked === "AllTeachers" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => setClicked("AllTeachers")}
      >
        <CalendarIcon />
        Educators
      </Button>
      <Button
        color={clicked === "Messages" ? "black" : "white"}
        bgColor={clicked === "Messages" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        justifyContent={"flex-start"}
        onClick={() => setClicked("Chatpage")}
      >
        <ChatIcon />
        Messages
      </Button>
      <Button
        color={clicked === "Faq" ? "black" : "white"}
        bgColor={clicked === "Faq" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        onClick={() => setClicked("Faq")}
        justifyContent={"flex-start"}
      >
        <CalendarIcon />
        Faq
      </Button>
      <Button
        color={clicked === "ContactUs" ? "black" : "white"}
        bgColor={clicked === "ContactUs" ? "white" : "transparent"}
        _hover={{ bg: "white", color: "black" }}
        w="200px"
        gap="1rem"
        display={"flex"}
        onClick={() => setClicked("ContactUs")}
        justifyContent={"flex-start"}
      >
        <InfoIcon />
        Contact Us
      </Button>
      <Divider />
      <Button
        color="white"
        _hover={{ bg: "white", color: "black" }}
        bgColor="transparent"
        w="200px"
        gap="1rem"
        display={"flex"}
        onClick={logoutHandler}
        justifyContent={"flex-start"}
      >
        <i class="fas fa-sign-out-alt"></i>
        Log Out
      </Button>
    </Stack>
  );
};

export default Sidebar;
