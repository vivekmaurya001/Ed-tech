import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup2 = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const [Toggle, setToggle] = useState(true);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!FirstName || !email || !password || !confirmpassword) {
      toast({
        title: "Please fill Out all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    if (password != confirmpassword) {
      toast({
        title: "password and confirmpassword should be same",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    let fullName = FirstName + " " + LastName;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `https://ed-tech-1-u5wg.onrender.com/api/user`,
        {
          email: email,
          password: password,
          name: fullName,
        },
        config
      );

      console.log(data);
      if (data.success) {
        //redirect
        localStorage.setItem("userinfo", JSON.stringify(data));
        toast({
          title: "Account created.",
          description: "Account created sucessfully",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setLoading(false);
        navigate("/dashboard");
      } else {
        toast({
          title: "Invalid Credentials",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      toast({
        title: "Error Occured!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Box bgColor="#010715" h="100vh">
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          mb="96px"
          fontWeight="bold"
          py="4px"
          textColor="white"
        >
          <Box display="flex" alignItems="center" gap="24px" mt="1rem">
            <Box fontSize="x-large" cursor={"pointer"}>
              {" "}
              <Link to="/">Course AI</Link>{" "}
            </Box>
            <Input
              variant="filled"
              placeholder="Search Courses"
              bgColor="#121A23"
              w="96"
            />
          </Box>
          <Box display="flex" gap="32px" alignItems="center">
            <div className="courses_markdown">
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button} fontSize="xl">
                      {isOpen ? "Close" : "Open"}
                    </MenuButton>
                    <MenuList bgColor="transparent">
                      <MenuItem bgColor="transparent">HomePage</MenuItem>
                      <MenuItem bgColor="transparent">Courses</MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </div>
            <Text fontSize="x-large">For business</Text>
            <Text fontSize="x-large">For Teachers</Text>
            <Flex gap="1rem" className="buttons">
              <Button colorScheme="teal" variant="ghost">
                <Link to="/login">Log in</Link>
              </Button>
              <Button colorScheme="teal" variant="outline">
                Sign Up
              </Button>
            </Flex>
          </Box>
        </Box>
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="center"
          alignContent="center"
          gap="128px"
        >
          <Stack className="left" w="40%" spacing={3}>
            <Heading as="h3" size="md" color={"white"}>
              Join the millions learning to code with StudyNotion for free
            </Heading>
            <Text textColor="white" fontSize="sm">
              Build skills for today, tomorrow, and beyond.
            </Text>
            <Flex textColor="#47a5c5" fontSize="lg">
              Education to future-proof your career.
            </Flex>
            <Box className="buttons" display="flex" borderRadius="full">
              <Button
                colorScheme={Toggle ? "#47a5c5" : "gray"}
                size="md"
                onClick={() => {
                  setToggle(!Toggle);
                }}
              >
                Student
              </Button>
              <Button
                colorScheme={Toggle ? "gray" : "#47a5c5"}
                size="md"
                onClick={() => {
                  setToggle(!Toggle);
                }}
              >
                Instructor
              </Button>
            </Box>
            <Box className="name" display="flex" justifyContent="space-between">
              <Box w="40%" className="first_name ">
                <Text textColor="White">First Name</Text>
                <Input
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  bgColor="#121A23"
                  variant="outline"
                  textColor="White"
                  placeholder="Enter first name"
                  size="md"
                />
              </Box>
              <Box w="40%" className="last_name">
                <Text textColor="White">Last Name</Text>
                <Input
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  bgColor="#121A23"
                  variant="outline"
                  textColor="White"
                  placeholder="Enter last name"
                  size="lg"
                />
              </Box>
            </Box>

            <Box w="full" className="email">
              <Text textColor="white">Email Address</Text>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bgColor="#121A23"
                variant="outline"
                textColor="white"
                placeholder="Enter email address"
                size="lg"
              />
            </Box>

            <Box
              className="password"
              display="flex"
              justifyContent="space-between"
            >
              <Box w="48%" className="first_pwd">
                <Text textColor="white">Enter Password</Text>
                <InputGroup size="lg">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    bgColor="#121A23"
                    textColor="white"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box width="48%" className="last_pwd">
                <Text textColor="white">Confirm Password</Text>
                <InputGroup size="lg">
                  <Input
                    value={confirmpassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Confirm password"
                    bgColor="#121A23"
                    textColor="white"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Box>
            <div className="signup2Signup2_btn">
              <Button
                colorScheme="yellow"
                variant="solid"
                width="full"
                onClick={submitHandler}
                isLoading={loading}
              >
                Sign Up
              </Button>
            </div>
          </Stack>
          <Box boxSize="md">
            <Image src="images/Yes.png" alt="Dan Abramov" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Signup2;
