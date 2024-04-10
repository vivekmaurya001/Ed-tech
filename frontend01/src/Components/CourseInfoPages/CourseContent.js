import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  Tag,
  TagLabel,
  TagCloseButton,
  Avatar,
  Button,
  AccordionIcon,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, InfoIcon } from "@chakra-ui/icons";
import axios from "axios";
import { ChatState } from "../../Context/ChatProvider";

const CourseContent = () => {
  const { selctedCourse, setClicked, user, setUser } = ChatState();
  const [loading, setLoading] = useState(false);
  const [isenrolled, setisenrolled] = useState(false);
  function formatDate(isoDateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(isoDateString);
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date).replace(/,/, "");
  }
  const toast = useToast();

  const vedioArray = selctedCourse.Vedios;
  const moduleVideos = {};
  for (const item of vedioArray) {
    const moduleName = item.ModuleName;
    const videoName = item.VedioName;
    if (!moduleVideos[moduleName]) {
      moduleVideos[moduleName] = [];
    }
    moduleVideos[moduleName].push(videoName);
  }

  const isEnrolled = () => {
    const index = user.user.enrolledcourses.findIndex(
      (course) => course._id === selctedCourse._id
    );
    console.log(index);
    if (index >= 0) setisenrolled(true);
    else setisenrolled(false);
  };

  const EnrollCourse = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };
      const { data } = await axios.put(
        "/api/user/update",
        {
          courseId: selctedCourse._id,
        },
        config
      );

      console.log(data);
      const Updateduser = user;
      Updateduser.user = data;
      setUser(Updateduser);
      console.log(user);
      toast({
        title: "Success",
        description: "Enrolled Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      setisenrolled(true);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to enroll the course",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    isEnrolled();
  }, []);
  return (
    <>
      {selctedCourse ? (
        <Stack spacing={14} bgColor="black" color="white">
          <Flex
            p="2rem"
            justifyContent="space-between"
            gap="10px"
            bgColor="#161c28"
            color="white"
          >
            <Stack w="60%" spacing={6}>
              <Flex justifyContent="space-between">
                <Heading>{selctedCourse.name}</Heading>
                <Box
                  h={10}
                  color={"white"}
                  p="3px 9px"
                  borderRadius="10px"
                  bgColor={"purple"}
                  display="flex"
                  alignItems="center"
                  gap="9px"
                >
                  <i class="fas fa-code"></i>
                  <Text>{selctedCourse.Details.Domain}</Text>
                </Box>
              </Flex>
              <Text>{selctedCourse.Details.About}</Text>
              <Flex gap="1rem" alignItems={"center"}>
                <Avatar
                  name="Dan Abrahmov"
                  src={
                    selctedCourse.Creater.pic
                      ? selctedCourse.Creater.pic
                      : "images/pic-7.jpg"
                  }
                />
                <b>
                  Created By{" "}
                  {selctedCourse.Creater.name ? (
                    <b>{selctedCourse.Creater.name}</b>
                  ) : (
                    <b>John Doe</b>
                  )}
                </b>
              </Flex>
              <Flex gap="20px">
                <Text fontWeight="bold">
                  Price:-${selctedCourse.Details.Price}
                </Text>
                <Text> Total {selctedCourse.Vedios.length} Vedios</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex gap={"1rem"}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <InfoIcon /> Created at{" "}
                    {formatDate(selctedCourse.createdAt)}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i class="fas fa-globe"></i>
                    {selctedCourse.Details.Language}
                  </div>
                </Flex>
                {isenrolled ? (
                  <Button isDisabled bgColor="teal" color={"white"}>
                    Enrolled
                  </Button>
                ) : (
                  <Button
                    bgColor="teal"
                    color={"white"}
                    _hover={{ color: "black", bgColor: "grey" }}
                    onClick={() => EnrollCourse()}
                  >
                    {loading ? <Spinner /> : "Enroll now"}
                  </Button>
                )}
              </Flex>
            </Stack>
            <Image
              borderRadius="10px"
              objectFit="cover"
              maxW={{ base: "100%", sm: "400px" }}
              src={selctedCourse.pic}
              alt="Caffe Latte"
            />
          </Flex>
          <Flex color="white" p="2rem" minH="80%" bgColor="black">
            <Box w="90%" bgColor="black">
              <Stack p="1rem" w="60%" bgColor="black">
                <Heading>Course Structure</Heading>
                <Accordion allowToggle border="1px solid grey" color="black">
                  {Object.entries(moduleVideos).map(([moduleName, videos]) => (
                    <AccordionItem key={moduleName} bgColor="#e9ecef">
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {moduleName}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        display={"flex"}
                        gap="1rem"
                        flexDirection={"column"}
                      >
                        {videos.map((videoName, i) => (
                          <Box
                            key={i}
                            display={"flex"}
                            gap="1rem"
                            alignItems="center"
                            _hover={{ color: "#adb5bd" }}
                            cursor={"pointer"}
                            onClick={() => {
                              if (isEnrolled) {
                                setClicked("CourseVedios");
                              } else {
                                toast({
                                  title: "Error Occured!",
                                  description: "Course not enrolled yet",
                                  status: "warning",
                                  duration: 5000,
                                  isClosable: true,
                                  position: "bottom-left",
                                });
                              }
                            }}
                          >
                            <i class="fas fa-video"></i>
                            <p>{videoName}</p>
                          </Box>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Stack>
              <Box p="1rem" w="60%">
                <Box border={"2px solid white"} p="1rem">
                  <Heading>What you'll learn</Heading>
                  <Text>{selctedCourse.Details.Benefits}</Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Stack>
      ) : (
        ""
      )}
    </>
  );
};

export default CourseContent;
