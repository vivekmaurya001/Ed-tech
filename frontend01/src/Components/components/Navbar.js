import {
  Box,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import SearchDrawer from "./SearchDrawer";
import { ChatState } from "../../Context/ChatProvider";

const Navbar = () => {
  const { user, Notification, setNotification, setSelectedChat } = ChatState();

  const getsender = (Userarray) => {
    if (user.user._id === Userarray[0]) {
      return Userarray[1];
    } else return Userarray[0];
  };

  return (
    <Box
      p="0.7rem 1rem"
      height="60px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex gap="1rem">
        <Heading>Chat With Your Peers</Heading>
        <SearchDrawer />
      </Flex>
      <Box display="flex" gap="1rem" alignItems="center">
        <Menu>
          <MenuButton>
            <BellIcon w={6} h={6} color="black.500" />
            {Notification.length ? (
              <Badge ml="1" colorScheme="green">
                New
              </Badge>
            ) : null}
          </MenuButton>
          <MenuList>
            {!Notification.length && "No New Messages"}
            {Notification.map((notif) => {
              return (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.Chat);
                    setNotification(Notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.Chat.isGroupChat
                    ? `New Message in ${notif.Chat.chatName}`
                    : `new Message from ${notif.senderName}`}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
