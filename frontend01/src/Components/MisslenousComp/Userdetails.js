import React from "react";
import {
  Box,
  Stack,
  Button,
  Divider,
  Progress,
  Heading,
  Flex,
  Card,
  CardBody,
  GridItem,
  Grid,
  Text,
  Image,
  CardFooter,
  CircularProgress,
  CircularProgressLabel,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";

const Userdetails = () => {
  const currentDate = new Date();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const options = {
    weekday: "long", // Full weekday name (e.g., "Monday")
    day: "numeric", // Day of the month (e.g., "03")
    month: "long", // Full month name (e.g., "February")
    year: "numeric", // Full year (e.g., "2020")
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const { user } = ChatState();

  var totalVideos, VediosCompleted;

  const addFxn = () => {
    let no = 0;
    for (let i = 0; i < user.user.VediosCompleted.length; i++) {
      no = no + user.user.VediosCompleted[i].vedios;
    }
    VediosCompleted = no;
    no = 0;
    console.log(user.user.enrolledcourses.Vedios);

    for (let i = 0; i < user.user.enrolledcourses.length; i++) {
      no = no + user.user.enrolledcourses[i].Vedios.length;
    }
    console.log(no);
    totalVideos = no;
  };
  addFxn();
  const percentage = (VediosCompleted / totalVideos) * 100;

  return (
    <>
      <Stack>
        <Flex h="80px" justifyContent={"space-between"} alignItems="center">
          <Box>
            <Heading>Dashboard</Heading>
            <Text>{formattedDate}</Text>
          </Box>
          <Button gap={"1rem"} ref={btnRef} onClick={onOpen}>
            Progress
          </Button>
        </Flex>
        <Card
          direction={{ base: "column", sm: "row" }}
          h="250px"
          overflow="hidden"
          variant="outline"
          display="flex"
          justifyContent="center"
          gap="2rem"
          p="1rem"
          w="85%"
          m="0 auto"
          bgColor="#ffe7e9"
        >
          <Image
            objectFit="cover"
            w="30%"
            maxW={{ base: "100%", sm: "200px" }}
            src="images/login.png"
            alt="Caffe Latte"
          />

          <Stack w="50%">
            <CardBody>
              <Text
                display="flex"
                alignItems="center"
                fontSize="40px"
                gap="1rem"
              >
                Hi<Heading size="xl">, {user.user.name}</Heading>
              </Text>

              <Text py="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                dicta repudiandae eaque. Officia exercitationem itaque labore
                harum quaerat distinctio laboriosam sit ipsam doloremque esse
                debitis voluptatem illum, vitae recusandae illo!
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Flex justifyContent={"space-around"} mt="1rem">
          <Box
            display="flex"
            gap="1rem"
            w="280px"
            h="90px"
            borderRadius="10px"
            bgColor={"white"}
            boxShadow="lg"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button bgColor="purple" boxShadow="2xl" _hover={{ bg: "grey" }}>
              <i
                style={{ color: "white" }}
                class="fa fa-graduation-cap"
                aria-hidden="true"
              ></i>
            </Button>
            <Flex flexDirection="column" fontSize={"20px"}>
              <b>{user.user.VediosCompleted.length}</b>
              Courses enrolled
            </Flex>
          </Box>
          <Box
            display="flex"
            gap="1rem"
            w="280px"
            h="90px"
            borderRadius="10px"
            bgColor={"white"}
            boxShadow="lg"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button bgColor="teal" boxShadow="2xl" _hover={{ bg: "grey" }}>
              <i
                style={{ color: "white" }}
                class="fa fa-check"
                aria-hidden="true"
              ></i>
            </Button>
            <Flex flexDirection="column" fontSize={"20px"}>
              <b>{VediosCompleted}</b>
              Vedios completed
            </Flex>
          </Box>
          <Box
            display="flex"
            gap="1rem"
            w="280px"
            h="90px"
            borderRadius="10px"
            bgColor={"white"}
            boxShadow="lg"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button bgColor="#f25767" boxShadow="2xl" _hover={{ bg: "grey" }}>
              <i
                style={{ color: "white" }}
                class="fa fa-pencil-square-o"
                aria-hidden="true"
              ></i>
            </Button>
            <Flex flexDirection="column" fontSize={"20px"}>
              <b>4</b>
              Courses in Progress
            </Flex>
          </Box>
        </Flex>
      </Stack>
      <Stack mb="1rem" spacing={"8"}>
        <Heading>Statistics</Heading>
        <Grid
          h="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
        >
          <GridItem
            borderRadius={15}
            rowSpan={2}
            colSpan={2}
            bg="#c5ccdc"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={30}
              fontWeight={600}
              gap={7}
              display={"flex"}
              alignItems={"center"}
            >
              Lessons Completed
              <i class="fa fa-pie-chart" aria-hidden="true"></i>
            </Text>
            <Flex
              w="250px"
              mt={30}
              flexDirection="column"
              gap="2rem"
              alignItems="center"
            >
              <CircularProgress value={percentage} size="200px" thickness="4px">
                <CircularProgressLabel fontSize={20}>
                  <Flex flexDirection={"column"}>
                    <Text>
                      {VediosCompleted}/{totalVideos}
                    </Text>
                    <Text>Lessons</Text>
                  </Flex>
                </CircularProgressLabel>
              </CircularProgress>
              <Text>
                Course:{" "}
                <Button>
                  General <ChevronDownIcon />
                </Button>
              </Text>
            </Flex>
          </GridItem>
          <GridItem borderRadius={15} colSpan={2} bg="#c5ccdc" p="1rem">
            <Stack spacing={5} alignItems={"center"} fontSize={20}>
              <Flex
                gap="1rem"
                justifyContent={"center"}
                alignSelf={"flex-start"}
                alignItems={"center"}
              >
                <Button h="50px" w="55px">
                  <i class="fa fa-trophy" aria-hidden="true"></i>
                </Button>
                <Text fontWeight={"bold"} fontSize={25}>
                  {(percentage / 10).toFixed(1)}
                </Text>
              </Flex>
              <b style={{ alignSelf: "flex-start" }}>Average Score</b>
              <Text alignSelf={"flex-start"}>
                your <b style={{ color: "blue" }}>{percentage.toFixed(1)}%</b>
                work is completed
              </Text>
            </Stack>
          </GridItem>
          <GridItem borderRadius={15} colSpan={2} bg="#c5ccdc" p="1rem">
            <Stack spacing={5} alignItems={"center"} fontSize={20}>
              <Flex
                gap="1rem"
                justifyContent={"center"}
                alignSelf={"flex-start"}
                alignItems={"center"}
              >
                <Button h="50px" w="55px">
                  <i class="fa fa-file-code-o" aria-hidden="true"></i>
                </Button>
                <Text fontWeight={"bold"} fontSize={25}>
                  {VediosCompleted}
                </Text>
              </Flex>
              <b style={{ alignSelf: "flex-start" }}>Total Watchmins</b>
              <Text alignSelf={"flex-start"}>
                <b style={{ color: "teal" }}>{20 * VediosCompleted}</b>{" "}
                Watchmins
              </Text>
            </Stack>
          </GridItem>
          <GridItem
            borderRadius={15}
            colSpan={4}
            bg="#c5ccdc"
            p="1rem"
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Text fontWeight={"bold"} fontSize={25}>
              Feedback and recomendations
            </Text>
            <Flex alignItems={"center"} gap={"1rem"}>
              <Image
                boxSize="60px"
                borderRadius={8}
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <b style={{ fontSize: "20px" }}>Terry Bator</b>
            </Flex>
            <Text>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus corporis non necessitatibus ex dignissimos hic enim
              tenetur! Officia, iure sequi?
            </Text>
          </GridItem>
        </Grid>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Progress</DrawerHeader>

          <DrawerBody>
            {user.user.enrolledcourses.map((Course, i) => {
              return (
                <Box
                  cursor="pointer"
                  bg="#90e0ef"
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
                  <Flex justifyContent={"space-between"}>
                    <Flex gap="1rem">
                      <Avatar
                        mr={2}
                        size="md"
                        cursor="pointer"
                        name={Course.name}
                        src={Course.pic}
                      />
                      <Flex flexDirection={"column"}>
                        <Text fontWeight="500" fontSize="18px">
                          {Course.name}
                        </Text>
                        <Text>{Course.Details.Domain}</Text>
                      </Flex>
                    </Flex>
                    <CircularProgress
                      value={
                        (user.user.VediosCompleted[i].vedios /
                          user.user.enrolledcourses[i].Vedios.length) *
                        100
                      }
                      size="60px"
                      thickness="7px"
                      color="green"
                    >
                      <CircularProgressLabel>
                        {(
                          (user.user.VediosCompleted[i].vedios /
                            user.user.enrolledcourses[i].Vedios.length) *
                          100
                        ).toFixed(1)}
                        %
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Flex>
                </Box>
              );
            })}{" "}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Userdetails;
