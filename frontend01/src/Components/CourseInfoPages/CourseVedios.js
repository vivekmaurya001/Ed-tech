import React, { useEffect, useState } from "react";
import {
  Flex,
  AspectRatio,
  Stack,
  Image,
  Box,
  Text,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import "./Video.css";
import { color } from "framer-motion";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";

const CourseVedios = () => {
  const { selctedCourse, user, setUser } = ChatState();
  const toast = useToast();
  const [clickedVideo, setClickedVideo] = useState(selctedCourse.Vedios[0]);

  console.log(selctedCourse);
  const VideoCompleted = async () => {
    const index = user.user.VediosCompleted.findIndex(
      (course) => course.courseId === selctedCourse._id
    );
    console.log(index);
    if (user.user.VediosCompleted[index].vedios > selctedCourse.Vedios.length) {
      toast({
        title: "Error Occured!",
        description: "Course already completed",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };
      const { data } = await axios.put(
        "/api/user/update",
        {
          courseIdforVedio: selctedCourse._id,
        },
        config
      );
      console.log(data);
      const Updateduser = user;
      Updateduser.user = data;
      setUser(Updateduser);
      toast({
        title: "Success",
        description: "Video completed",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to complete the course",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  // useEffect(() => {
  //   VideoCompleted();
  // }, [user]);
  return (
    <Flex w="100%" justifyContent={"space-between"}>
      <Stack w="70%">
        <div className="video-container">
          <Box class="video">
            <video
              src="images/vid-1.mp4"
              controls
              poster="images/post-1-1.png"
              id="video"
            ></video>
          </Box>
          <h3 class="title">{clickedVideo.VedioName}</h3>
          <div class="info">
            <p class="date">
              <i style={{ color: "black" }} class="fas fa-calendar"></i>
              <span>22-10-2022</span>
            </p>
            <p class="date">
              <i style={{ color: "black" }} class="fas fa-heart"></i>
              <span>44 likes</span>
            </p>
          </div>
          <div class="tutor">
            <img
              src={
                selctedCourse.Creater.pic
                  ? selctedCourse.Creater.pic
                  : "images/pic-7.jpg"
              }
              alt=""
            />
            <Stack spacing={0}>
              <b style={{ fontSize: "20px" }}>
                {" "}
                {selctedCourse.Creater.name ? (
                  <b>{selctedCourse.Creater.name}</b>
                ) : (
                  <b>John Doe</b>
                )}
              </b>
              <span>developer</span>
            </Stack>
          </div>
          <form action="" method="post" class="flex">
            <Button
              bgColor="teal"
              p="10px"
              color="white 
            "
              _hover={{ bg: "grey", color: "black" }}
              onClick={() => VideoCompleted()}
            >
              Vedio Completed
            </Button>
            <Button
              gap={5}
              bgColor={"orange"}
              color={"white"}
              _hover={{ bg: "grey", color: "black" }}
            >
              <i class="far fa-heart"></i>
              <span>like</span>
            </Button>
          </form>
        </div>
      </Stack>
      <Stack mt="0.7rem" h="100%" align="center" w={"29%"}>
        {selctedCourse.Vedios.map((video, i) => {
          return (
            <Flex
              key={i}
              bgColor={
                selctedCourse.Vedios[i] === clickedVideo ? "purple" : "#adb5bd"
              }
              h="65px"
              borderRadius="8px"
              alignItems="center"
              p="10px"
              gap="1rem"
              color="white"
              w="100%"
              cursor={"pointer"}
              onClick={() => setClickedVideo(selctedCourse.Vedios[i])}
            >
              <Button
                bgColor={
                  selctedCourse.Vedios[i] === clickedVideo
                    ? "orange"
                    : "#6c757d"
                }
                borderRadius="50%"
              >
                <i style={{ color: "white" }} class="fas fa-play"></i>
              </Button>
              <span>
                <Text cursor="pointer" fontWeight="bold">
                  {video.VedioName}
                </Text>
                <Text color="#e2e8f0">20 mins</Text>
              </span>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default CourseVedios;
