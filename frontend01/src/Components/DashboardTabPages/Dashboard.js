import React, { useState } from "react";
import "./App2.css";
import { Flex } from "@chakra-ui/react";
import Navbar from "../MisslenousComp/Navbar";
import Sidebar from "../MisslenousComp/Sidebar";
import Userpage from "../MisslenousComp/Userpage";
import { ChatState } from "../../Context/ChatProvider";

const Dashboard = () => {
  const { user } = ChatState();

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {user && <Navbar />}
      <Flex justifyContent="space-between" h="90%" w="100%" pl="1rem">
        {user && <Sidebar />}
        {user && <Userpage />}
      </Flex>
    </div>
  );
};

export default Dashboard;
