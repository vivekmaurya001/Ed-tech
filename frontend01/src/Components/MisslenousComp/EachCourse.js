import React, { useRef } from "react";
import {
  Box,
  Stack,
  Button,
  Heading,
  Flex,
  Image,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";

const EachCourse = ({ course }) => {
  const { setSelctedCourse, setClicked } = ChatState();

  function countUniqueNames(arr) {
    const nameSet = new Set();
    for (const obj of arr) {
      const name = obj.ModuleName;
      nameSet.add(name);
    }
    return nameSet.size;
  }
  const TotalModules = countUniqueNames(course.Vedios);

  return (
    // <Box minW="280px" boxShadow="lg" borderRadius="10px">
    //   <Image
    //     src={course.pic}
    //     alt="Green double couch with wooden legs"
    //     borderRadius="lg"
    //   />
    //   <Stack spacing="3" p="1rem">
    //     <Heading size="md">{course.name} </Heading>
    //     <Flex justifyContent="space-between" alignItems="center">
    //       <Box
    //         display="flex"
    //         justifyContent="space-between"
    //         alignItems="center"
    //         gap="10px"
    //       >
    //         <Avatar name="Dan Abrahmov" src="images/pic-2.jpg" />
    //         <b>John Doe</b>
    //       </Box>
    //       <Button
    //         onClick={() => {
    //           setClicked("CourseContent");
    //           setSelctedCourse(course);
    //         }}
    //       >
    //         Veiw
    //         <ArrowForwardIcon />
    //       </Button>
    //     </Flex>
    //   </Stack>
    // </Box>
    <Box minW="250px" boxShadow="lg" borderRadius="10px" h="fit-content">
      <Image
        src={course.pic}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        width="full"
        height="16vh"
        objectFit="cover"
        mb="8px"
        borderBottomRadius="0"
      />
      <Flex
        gap="8px"
        justify={"space-between"}
        align="center"
        p="1rem"
        flexWrap={"wrap"}
      >
        <Flex gap="8px" flexWrap={"wrap"}>
          <Button colorScheme="orange" size="sm">
            Top
          </Button>
          <Button colorScheme="red" size="sm">
            {course.Details.Domain}
          </Button>
        </Flex>
        <Text fontWeight="700">{TotalModules} Modules</Text>
      </Flex>
      <Text fontWeight="700" fontSize="md" px="1rem">
        {course.name}
      </Text>
      <Text fontSize="md" px="1rem">
        Course-Prize: $<b>{course.Details.Price}</b>
      </Text>
      <Stack spacing="3" p="1rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
          >
            <Avatar
              name="Dan Abrahmov"
              src={course.Creater.pic ? course.Creater.pic : "images/pic-7.jpg"}
            />
            {course.Creater.name ? (
              <b>{course.Creater.name}</b>
            ) : (
              <b>Educator</b>
            )}
          </Box>
          <Button
            onClick={() => {
              setClicked("CourseContent");
              setSelctedCourse(course);
            }}
          >
            Veiw
            <ArrowForwardIcon />
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default EachCourse;
