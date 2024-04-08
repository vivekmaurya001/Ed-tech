import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);
  const toast = useToast();
  const navigate = useNavigate();
  const [Toggle, setToggle] = useState(true);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill Out all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/user/login`,
        {
          email: email,
          password: password,
        },
        config
      );

      console.log(data);

      if (data.success) {
        //redirect
        localStorage.setItem("userinfo", JSON.stringify(data));
        toast({
          title: "Success",
          description: "Login credentials verified",
          status: "success",
          duration: 2000,
        });
        setLoading(false);
        navigate("/dashboard");
      } else {
        toast({
          title: "Invalid Credentials",
          status: "error",
          duration: 2000,
        });
        setLoading(false);
      }
    } catch (error) {
      toast({
        title: "Error Occured!",
        status: "error",
        duration: 2000,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <div>
      <Box bgColor="#030C15" h="100vh">
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
              <Link to="/">Course AI</Link>
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
                Log in
              </Button>
              <Button colorScheme="teal" variant="outline">
                <Link to="/signup">Sign Up</Link>
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
          <Box className="left" w="33%">
            <Heading as="h3" size="xl" noOfLines={2} color={"white"}>
              Welcome Back
            </Heading>
            <br />
            <span className="text-white text-lg">
              <Box textColor="white" fontSize="lg">
                Build skills for today, tomorrow, and beyond.
              </Box>
            </span>
            <span>
              <Box textColor="#47a5c5" fontSize="lg">
                Education to future-proof your career.
              </Box>
            </span>
            <br />
            <br />
            <Box w="full" className="email">
              <Text textColor="white">Email Address</Text>
              <Input
                bgColor="#121A23"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outline"
                textColor="white"
                placeholder="Enter email address"
                size="lg"
              />
            </Box>
            <br />
            <Box w="full" className="first_pwd">
              <Text textColor="white">Enter Password</Text>
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <Box mt="24px" className="login_btn">
              <Button
                colorScheme="yellow"
                variant="solid"
                width="full"
                onClick={submitHandler}
                isLoading={loading}
              >
                Log In
              </Button>
            </Box>
          </Box>
          <div className="right">
            <img src="images/no.png" alt="" />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Login2;
