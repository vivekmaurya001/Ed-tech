import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";

const MessageItem = ({ messages }) => {
  const { user, selectedChat } = ChatState();

  // chat logic functions
  const isSameSender = (Msgobj) => {
    if (user.user._id === Msgobj.sender) return true;
    else return false;
  };
  const getSenderName = (Id) => {
    const index = selectedChat.users.findIndex((user) => user._id === Id);
    if (index !== -1) return selectedChat.users[index].name;
    else return "User Left";
  };

  return (
    <>
      {messages &&
        messages?.map((MsgObj, i) => {
          return (
            <Box
              key={i}
              maxWidth="30%"
              p="6px"
              bgColor={isSameSender(MsgObj) ? "teal" : "#2F855A"}
              alignSelf={isSameSender(MsgObj) ? "flex-end" : null}
              borderRadius="12px"
            >
              <Text color="black" fontSize="11px" fontWeight="bold">
                {getSenderName(MsgObj.sender)}
              </Text>
              <Box
                w="100%"
                minHeight="50px"
                p="5px 1rem"
                color="white"
                borderRadius="8px"
                bgColor={isSameSender(MsgObj) ? "#38B2AC" : "#48BB78"}
              >
                <Text>{MsgObj.content}</Text>
              </Box>
            </Box>
          );
        })}
    </>
  );
};

export default MessageItem;
