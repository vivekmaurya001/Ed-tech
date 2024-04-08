import React from "react";
import { ChatState } from "../../Context/ChatProvider";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const SelctedUserModal = () => {
  const { user, selectedChat } = ChatState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getsender = (Userarray) => {
    if (user.user._id === Userarray[0]._id) {
      return Userarray[1];
    } else return Userarray[0];
  };
  return (
    <>
      <Button onClick={onOpen}>
        <ViewIcon />
      </Button>
      {selectedChat && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent fontSize="3xl" textAlign="center">
            <ModalHeader fontSize="4xl">
              {getsender(selectedChat.users).name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody m="0 auto">
              <Image
                borderRadius="full"
                boxSize="200px"
                src={getsender(selectedChat.users).pic}
                alt="Dan Abramov"
              />
              <Text>{getsender(selectedChat.users).email}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default SelctedUserModal;
