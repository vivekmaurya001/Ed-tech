import React, { useState, useEffect } from "react";
import { SearchIcon, ChevronDownIcon, BellIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  Image,
  Flex,
  Input,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useNavigate } from "react-router-dom";
import SearchDrawer from "./SearchDrawer";
import { ChatState } from "../../Context/ChatProvider";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setClicked } = ChatState();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };
  return (
    <Box
      bg="transparent"
      p="0.7rem 1rem"
      width="100%"
      height="60px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex gap={"2rem"} alignItems={"center"}>
        <Text fontSize="30px" color="white">
          Loop Academy
        </Text>
        <SearchDrawer />
      </Flex>
      <Box display="flex" gap="1rem" alignItems="center">
        <Button onClick={() => setClicked("CoursesPage")}>
          Enroll new Course
        </Button>
        <Menu>
          <MenuButton>
            <BellIcon w={6} h={6} color="white" />
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Image
              borderRadius="full"
              boxSize="40px"
              src={user.user.pic}
              alt="Dan Abramov"
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onOpen}>Profile</MenuItem>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent fontSize="3xl" textAlign="center">
            <ModalHeader fontSize="4xl">{user.user.name}</ModalHeader>
            <ModalBody
              m="0 auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Image
                borderRadius="full"
                boxSize="200px"
                src={user.user.pic}
                alt="Dan Abramov"
              />
              <Text>{user.user.email}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Navbar;
