import React from "react";
import {
  Box,
  Image,
  Stack,
  Heading,
  Textarea,
  Input,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Faq = () => {
  return (
    <Stack h="screen" px="2rem" gap="2rem">
      <Flex justifyContent="center" m="auto" alignItems="center">
        <Box
          backgroundImage="url('images/faq.svg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          w="40%"
          h="55vh"
        ></Box>
        <Stack
          w="60%"
          justifyContent="center"
          borderRadius="1vh"
          bgColor="gray.200"
          p="2rem"
        >
          <Heading as="h2" size="3xl" mb="1vh">
            Why Choose Us?
          </Heading>
          <Text size="lg" mb="1vh" fontSize="large" textColor="gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            hic beatae tenetur tempore accusantium labore suscipit consequatur
            nostrum expedita. Eum iste accusantium est porro voluptatibus,
            incidunt, consequatur sit ea laboriosam nostrum ad, numquam tempora
            neque ratione doloremque cum architecto debitis laborum illum
            excepturi. Rerum, ex?
          </Text>
          <Flex alignItems="center" w="100%" justifyContent="center">
            <Button colorScheme="blue" size="lg" w="40%">
              Our Courses
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Flex
        gap="16px"
        justifyContent="space-around"
        h="15vh"
        alignItems="center"
      >
        <Text
          bgColor="gray.200"
          p="2rem"
          w="25%"
          borderRadius="1vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          h="18vh"
        >
          <i className="fas fa-graduation-cap" style={{ fontSize: "50px" }}></i>
          <Text fontWeight="700" fontSize="lg">
            Placements
          </Text>
          <Text textColor="gray.500">100%</Text>
        </Text>
        <Text
          bgColor="gray.200"
          p="2rem"
          w="25%"
          borderRadius="1vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          h="18vh"
        >
          <i className="fas fa-graduation-cap" style={{ fontSize: "50px" }}></i>
          <Text fontWeight="700" fontSize="lg">
            +2k
          </Text>
          <Text textColor="gray.500">Expert Students </Text>
        </Text>
        <Text
          bgColor="gray.200"
          p="2rem"
          w="25%"
          borderRadius="1vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          h="18vh"
        >
          <i className="fas fa-graduation-cap" style={{ fontSize: "50px" }}></i>
          <Text fontWeight="700" fontSize="lg">
            +40k
          </Text>
          <Text textColor="gray.500" textAlign="center">
            Brilliant students
          </Text>
        </Text>
        <Text
          bgColor="gray.200"
          p="2rem"
          w="25%"
          borderRadius="1vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          h="18vh"
        >
          <i className="fas fa-graduation-cap" style={{ fontSize: "50px" }}></i>
          <Text fontWeight="700" fontSize="lg">
            + 10k
          </Text>
          <Text textColor="gray.500" textAlign="center">
            Online Courses
          </Text>
        </Text>
      </Flex>
    </Stack>
  );
};

export default Faq;
