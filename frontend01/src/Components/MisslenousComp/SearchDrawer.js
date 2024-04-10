import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Text,
  Box,
  Tooltip,
  useToast,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";
import CourseSearchItem from "./CourseSearchItem";

const SearchDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [search, Setsearch] = useState("");
  const [searchResults, SetsearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();
  const { user, setSelctedCourse, setClicked } = ChatState();

  //for searching a user in db through a keyword in email or name
  const submitHandler = async () => {
    if (!search) {
      toast({
        title: "Please enter Something in search",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };

      const { data } = await axios.get(`https://ed-tech-1-u5wg.onrender.com/api/course?search=${search}`);
      setLoading(false);
      SetsearchResults(data);
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
  //for running submitHandler through Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  useEffect(() => {
    if (!search) SetsearchResults([]);
  }, [search]);
  return (
    <>
      <Tooltip hasArrow label="Search User" bg="gray.300" color="black">
        <Button gap="0.7rem" ref={btnRef} onClick={onOpen}>
          <SearchIcon />
          <Text>Search Course</Text>
        </Button>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Courses</DrawerHeader>
          <DrawerBody>
            <Box>
              <Input
                mb="1rem"
                type="search"
                placeholder="Search here..."
                value={search}
                onChange={(e) => Setsearch(e.target.value)}
                onKeyUp={handleKeyPress}
              />
            </Box>
            <Stack spacing={2}>
              {loading ? (
                <Stack>
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                  <Skeleton height="45px" />
                </Stack>
              ) : (
                searchResults?.slice(0, 9).map((Course, i) => {
                  return (
                    <CourseSearchItem
                      key={i}
                      Course={Course}
                      handleFunction={() => {
                        setSelctedCourse(Course);
                        setClicked("CourseContent");
                      }}
                    />
                  );
                })
              )}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                SetsearchResults([]);
                Setsearch("");
              }}
            >
              Clear
            </Button>
            <Button
              colorScheme="blue"
              // onClick={submitHandler}
            >
              Search
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
