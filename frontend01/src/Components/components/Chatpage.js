import React, { useState } from "react";
import Navbar from "./Navbar";
import MyChats from "./MyChats";
import ChatBox from "./ChatBox";
import { ChatState } from "../../Context/ChatProvider";
import { Box, useMediaQuery } from "@chakra-ui/react";

const Chatpage = () => {
  const { user, selectedChat } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  //considering false for mychats
  const [switchTab, setSwitchTab] = useState(false);
  const [isLargerThan800] = useMediaQuery("(min-width: 900px)");

  return (
    <Box w="100%" h="100vh" overflowX="hidden" overflowY="hidden">
      <Navbar />
      <Box
        h="92vh"
        p="0.5rem 5px"
        w="100%"
        display="flex"
        justifyContent="space-around"
      >
        <MyChats
          fetchAgain={fetchAgain}
          switchTab={switchTab}
          setSwitchTab={setSwitchTab}
          setFetchAgain={setFetchAgain}
        />
        <ChatBox
          fetchAgain={fetchAgain}
          switchTab={switchTab}
          setSwitchTab={setSwitchTab}
          setFetchAgain={setFetchAgain}
        />
      </Box>
    </Box>
  );
};

export default Chatpage;
