import {
  Box,
  Text,
  Button,
  Stack,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import GroupChatModal from "./GroupChatModal";
import { ArrowRightIcon } from "@chakra-ui/icons";

const MyChats = ({ fetchAgain, setSwitchTab, switchTab }) => {
  const toast = useToast();
  const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();
  const [loggedUser, setLoggedUser] = useState(user.user);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);
      console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const getsender = (loggedUser, Userarray) => {
    if (loggedUser._id === Userarray[0]._id) return Userarray[1].name;
    else return Userarray[0].name;
    console.log(loggedUser, Userarray);
  };
  const tabChange = () => {
    if (selectedChat) setSwitchTab(!switchTab);
  };
  // when the name updated we have to render chats again
  useEffect(() => {
    // setLoggedUser(data1.user);
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);
  return (
    <Stack
      bg="white"
      w={isLargerThan900 ? "31%" : switchTab ? "0%" : "100%"}
      borderRadius="10px"
      p="0.8rem"
      gap="1rem"
      display={isLargerThan900 ? "flex" : switchTab ? "none" : "flex"}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontSize={{ base: "28px", md: "30px" }}
      >
        <Text fontSize="29px">My Chats</Text>
        <Flex gap="1rem">
          <GroupChatModal />
          {isLargerThan900 ? null : (
            <Button onClick={tabChange}>
              {" "}
              <ArrowRightIcon />
            </Button>
          )}
        </Flex>
      </Box>
      <Stack
        spacing={2}
        align="stretch"
        bgColor="#e3e1e1"
        w="100%"
        h="89%"
        borderRadius="10px"
        p="10px"
        overflowY="scroll"
      >
        {chats.map((chat, i) => {
          return (
            <Box
              key={i}
              w="100%"
              h="55px"
              borderRadius="10px"
              p="0.2rem 1rem"
              bgColor="#bfb8b8"
              boxShadow="lg"
              onClick={() => setSelectedChat(chat)}
              cursor="pointer"
              bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
              color={selectedChat === chat ? "white" : "black"}
            >
              <Text as="b">
                {!chat.isGroupChat
                  ? getsender(loggedUser, chat.users)
                  : chat.chatName}
              </Text>
              <Flex>
                {chat.latestMessage && (
                  <Text fontSize="xs">
                    <b>{chat.latestMessage.sender.name} : </b>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Text>
                )}
              </Flex>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default MyChats;
