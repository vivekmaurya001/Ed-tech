import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";

const CourseSearchItem = ({ Course, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Flex>
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={Course.name}
          src={Course.pic}
        />
        <Text>By:- {Course.Creater.name}</Text>
      </Flex>
      <Box>
        <Text>{Course.name}</Text>
        <Text fontSize="xs">
          <b>Price : </b>
          {Course.Details.Price}
        </Text>
      </Box>
    </Box>
  );
};

export default CourseSearchItem;
