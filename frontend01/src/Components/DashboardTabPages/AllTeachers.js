import React, { useEffect, useState } from "react";
import {
  Heading,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Button,
  Box,
  Text,
  GridItem,
  Grid,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

const AllTeachers = () => {
  const [searchResults, SetsearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();

  const submitHandler = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`/api/teacher?search=`);
      setLoading(false);
      SetsearchResults(data);
      console.log(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };
  useEffect(() => {
    submitHandler();
  }, []);
  return (
    <Box w="100%" h="100%">
      <Box
        border="none"
        borderBottom="2px solid grey"
        w="100%"
        m="auto"
        mb="1rem"
      >
        <Heading as="h1" size="4xl">
          Experts
        </Heading>
      </Box>
      <Box w="80%" m={"auto"} mb="1rem">
        <Input
          variant="filled"
          placeholder="Search Courses"
          bgColor="#ffff"
          _placeholder={{ color: "#5e5e5f" }}
          className=" text-[#130d31]"
          w="full"
          size="lg"
        />
      </Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gapX={8}
        gapY={8}
        gap="1rem"
        w="100%" // Equivalent to w-4/5
        m="auto" // Equivalent to margin: auto
      >
        <GridItem className="beteacher_card" style={{ width: "300px" }}>
          <Card>
            <CardHeader className="flex justify-center">
              <Heading size="lg"> Become a Teacher</Heading>
            </CardHeader>
            <CardBody py="2">
              <Text>
                Start a new journey to educate and help others grow in your
                field.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" size="md" width="full">
                Gets Started
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        {loading ? (
          <Spinner />
        ) : (
          searchResults.map((teacher, i) => {
            return (
              <GridItem className="teacher_card">
                <Card maxW="xs" bgColor="#c1afef">
                  <CardHeader py="2">
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Avatar name="Segun Adebayo" src={teacher.pic} />

                        <Box>
                          <Heading size="sm">{teacher.name}</Heading>
                          <Text>{teacher.Field}</Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardHeader>
                  <CardBody py="1">
                    <Heading as="h6" size="sm" margin="1vh" fontWeight="0">
                      Total Courses:69
                    </Heading>
                    <Heading as="h6" size="sm" margin="1vh" fontWeight="0">
                      Total Modules:69
                    </Heading>
                    <Heading as="h6" size="sm" margin="1vh" fontWeight="0">
                      Total Videos:69
                    </Heading>
                  </CardBody>
                  <CardFooter py="2">
                    <Button colorScheme="blue" size="md" width="full">
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default AllTeachers;
