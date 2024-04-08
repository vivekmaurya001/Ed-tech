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

const ContactUs = () => {
  return (
    <Box py="1vh" h="screen">
      <Flex
        justifyContent="space-between"
        m="auto"
        alignItems="center"
        w="100%"
      >
        <Box
          backgroundImage="url('images/contact.svg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          w="55%"
          h="80vh"
        ></Box>
        <Stack
          w="40%"
          justifyContent="center"
          alignItems="center"
          borderRadius="1vh"
          h="80vh"
          bgColor="gray.200"
          p="1rem"
        >
          <Heading as="h2" size="xl">
            Get in Touch
          </Heading>
          <Input
            _placeholder={{ color: "#5e5e5f" }}
            bgColor="#caf0f8"
            placeholder="Enter your name"
            size="lg"
            p="2rem"
            m="1rem"
          />
          <Input
            _placeholder={{ color: "#5e5e5f" }}
            bgColor="#caf0f8"
            placeholder="Enter your email"
            size="lg"
            p="2rem"
            m="1rem"
          />
          <Input
            _placeholder={{ color: "#5e5e5f" }}
            bgColor="#caf0f8"
            placeholder="Enter your number"
            size="lg"
            p="2rem"
            m="1rem"
          />
          <Textarea
            _placeholder={{ color: "#5e5e5f" }}
            bgColor="#caf0f8"
            placeholder="Here is a sample placeholder"
            m="1rem"
          />
          <Button colorScheme="blue" p="1rem">
            Send Message
          </Button>
        </Stack>
      </Flex>
      <Flex
        gap="16px"
        justifyContent="space-around"
        h="40vh"
        mt="1vh"
        alignItems="center"
      >
        <Text
          bgColor="gray.200"
          p="0.6rem"
          w="29%"
          borderRadius="1vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          h="50%"
        >
          <IconButton
            colorScheme="gray"
            // bgColor="gray"
            aria-label="Call Segun"
            size="lg"
            fontSize="30px"
            icon={<PhoneIcon />}
          />
          <Text fontWeight="700" fontSize="lg">
            Phone Number
          </Text>
          <Text textColor="gray.500">+91 884798383</Text>
          <Text textColor="gray.500">+91 884798383</Text>
        </Text>
        <Text
          bgColor="gray.200"
          p="0.6rem"
          w="29%"
          borderRadius="1vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          h="50%"
        >
          <IconButton
            variant="outline"
            colorScheme="gray"
            aria-label="Send email"
            size="lg"
            fontSize="30px"
            icon={<EmailIcon />}
          />
          <Text fontWeight="700" fontSize="lg">
            Email Address
          </Text>
          <Text textColor="gray.500">jhonybhai@gmail.com</Text>
          <Text textColor="gray.500">ranveer@gmail.com</Text>
        </Text>
        <Text
          bgColor="gray.200"
          p="0.6rem"
          w="29%"
          borderRadius="1vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          h="50%"
        >
          <img src="images/location-pin.png" width="32px" alt="" />
          <Text fontWeight="700" fontSize="lg">
            Office Address
          </Text>
          <Text textColor="gray.500" textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            iste deserunt.
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default ContactUs;
