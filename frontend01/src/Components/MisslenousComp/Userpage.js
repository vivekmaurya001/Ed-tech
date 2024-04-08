import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import CoursesPage from "../DashboardTabPages/CoursesPage";
import CourseContent from "../CourseInfoPages/CourseContent";
import CourseVedios from "../CourseInfoPages/CourseVedios";
import { ChatState } from "../../Context/ChatProvider";
import Userdetails from "./Userdetails";
import DomainPage from "./DomainPage";
import AllTeachers from "../DashboardTabPages/AllTeachers";
import ContactUs from "../DashboardTabPages/ContactUs";
import Faq from "../DashboardTabPages/Faq";
import Chatpage from "../components/Chatpage";

const Userpage = () => {
  const { clicked } = ChatState();
  const [domainObj, setdomainObj] = useState({});
  return (
    <Box
      w="85%"
      display="flex"
      flexDirection="column"
      gap="2rem"
      h="100%"
      bgColor="#f5f6fc"
      borderTopLeftRadius="1rem"
      borderBottomRightRadius="1rem"
      p={clicked === "CourseContent" || clicked === "DomainPage" ? "" : "1rem"}
      overflow="scroll"
    >
      {" "}
      {clicked === "Userdetails" && <Userdetails />}
      {clicked === "CoursesPage" && <CoursesPage setdomainObj={setdomainObj} />}
      {clicked === "CourseContent" && <CourseContent />}
      {clicked === "CourseVedios" && <CourseVedios />}
      {clicked === "DomainPage" && <DomainPage domainObj={domainObj} />}
      {clicked === "AllTeachers" && <AllTeachers />}
      {clicked === "Chatpage" && <Chatpage />}
      {clicked === "ContactUs" && <ContactUs />}
      {clicked === "Faq" && <Faq />}
      {/* <DomainPage /> */}
    </Box>
  );
};

export default Userpage;
