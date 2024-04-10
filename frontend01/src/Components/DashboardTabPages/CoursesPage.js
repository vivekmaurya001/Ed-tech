import React, { useEffect, useRef } from "react";
import {
  Stack,
  Heading,
  Flex,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import EachCourse from "../MisslenousComp/EachCourse";
import axios from "axios";

const CoursesPage = ({ setdomainObj }) => {
  const {
    user,
    enrolledCourses,
    totalCourses,
    setEnrolledCourses,
    setTotalCourses,
    setClicked,
  } = ChatState();
  setEnrolledCourses(user.user.enrolledcourses);
  const toast = useToast();
  console.log(enrolledCourses);
  console.log(user.user);

  const fetchCourses = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };
      const { data } = await axios.get("https://ed-tech-1-u5wg.onrender.com/api/course/fetch");
      console.log(data);
      setTotalCourses(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the courses",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <Stack spacing="5">
      <Stack mb="1rem" spacing={"3"}>
        <Heading>Explore Topics and Skills</Heading>
        <Grid
          h="350px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={3}
          borderTop="1px solid grey"
          p={"1rem"}
        >
          <GridItem
            rowSpan={2}
            colSpan={2}
            bgImage="url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=compress&dpr=1&h=340&fit=crop')" // Replace with your image URL
            bgPosition="center"
            bgRepeat="no-repeat"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{
              filter: "brightness(0.8)",
              cursor: "pointer", // Reduce brightness on hover
            }}
            onClick={() => {
              setClicked("DomainPage");
              setdomainObj({
                url: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=compress&dpr=1&h=340&fit=crop",
                Name: " Data Science",
              });
            }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">
              Data Science{" "}
            </Text>
          </GridItem>
          <GridItem
            _hover={{
              filter: "brightness(0.8)",
              cursor: "pointer", // Reduce brightness on hover
            }}
            colSpan={2}
            bgImage="url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png?auto=compress&dpr=1&h=160&fit=crop')" // Replace with your image URL
            bgPosition="center"
            bgRepeat="no-repeat"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => {
              setClicked("DomainPage");
              setdomainObj({
                url: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png?auto=compress&dpr=1&h=160&fit=crop",
                Name: " Web Development",
              });
            }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">
              Web Development
            </Text>
          </GridItem>
          <GridItem
            _hover={{
              filter: "brightness(0.8)",
              cursor: "pointer", // Reduce brightness on hover
            }}
            colSpan={2}
            bgImage="url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=compress&dpr=1&h=160&fit=crop')" // Replace with your image URL
            bgPosition="center"
            bgRepeat="no-repeat"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => {
              setClicked("DomainPage");
              setdomainObj({
                url: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=compress&dpr=1&h=160&fit=crop",
                Name: "Computer Science",
              });
            }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">
              Computer Science
            </Text>
          </GridItem>
          <GridItem
            _hover={{
              filter: "brightness(0.8)",
              cursor: "pointer", // Reduce brightness on hover
            }}
            colSpan={2}
            bgImage="url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png?auto=compress&dpr=1&h=160&fit=crop')" // Replace with your image URL
            bgPosition="center"
            bgRepeat="no-repeat"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => {
              setClicked("DomainPage");
              setdomainObj({
                url: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png?auto=compress&dpr=1&h=160&fit=crop",
                Name: "Machine Learning",
              });
            }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">
              Machine Learning
            </Text>
          </GridItem>
          <GridItem
            _hover={{
              filter: "brightness(0.8)",
              cursor: "pointer", // Reduce brightness on hover
            }}
            colSpan={2}
            bgImage="url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=compress&dpr=1&h=160&fit=crop')" // Replace with your image URL
            bgPosition="center"
            bgRepeat="no-repeat"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => {
              setClicked("DomainPage");
              setdomainObj({
                url: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=compress&dpr=1&h=160&fit=crop",
                Name: "Information Technology",
              });
            }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">
              Information Technology{" "}
            </Text>
          </GridItem>
        </Grid>
      </Stack>
      <Stack>
        <Heading>My Courses</Heading>
        <Flex
          overflowX="scroll"
          gap="1rem"
          w="full"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          borderTop="1px solid grey"
          p="1rem"
          // Add your container styles here
        >
          {enrolledCourses.length ? (
            enrolledCourses.map((course) => {
              return <EachCourse course={course} />;
            })
          ) : (
            <Text fontSize={40}> No courses enrolled</Text>
          )}
        </Flex>
      </Stack>
      <Stack spacing="1rem">
        <Heading>Our Courses</Heading>
        <SimpleGrid
          minChildWidth="250px"
          direction="row"
          spacing="1rem"
          borderTop="1px solid grey"
          p="1rem"
        >
          {totalCourses.map((course) => {
            return <EachCourse course={course} />;
          })}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default CoursesPage;
