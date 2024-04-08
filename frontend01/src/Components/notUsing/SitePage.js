import React from "react";
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
  Text,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SitePage = () => {
  return (
    <div>
      <div className="bg-[#030C15] text-white">
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          marginBottom="40px"
          fontWeight="bold"
          py="4px"
          textColor="white"
          pt="1rem"
        >
          <Box display="flex" alignItems="center" gap="24px">
            <Box fontSize="x-large">
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
            <div className="buttons">
              <Button colorScheme="teal" variant="ghost">
                <Link to="/login">Log in</Link>
              </Button>
              <Button colorScheme="teal" variant="outline">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </Box>
        </Box>
        <Box display="flex" className="headline">
          <Box textColor="white" w="50%" py="96px" ml="128px" className="left">
            <Heading as="h1" size="3xl" noOfLines={2} className="mb-5">
              Learn the latest skills to reach your professional goals.
            </Heading>
            <br />
            <Button colorScheme="green" size="lg">
              <p>Start My Free Month</p>
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="50%"
            className="right"
          >
            <Image
              w="50%"
              borderRadius="md"
              src="https://img.freepik.com/premium-photo/online-education-modern-vector-illustration-happy-junior-school-boy-student-working-pc_839035-526294.jpg?size=626&ext=jpg&ga=GA1.1.1277770292.1712077216&semt=ais"
              alt=""
              srcset=""
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          gap="5rem"
          mt="16px"
          mb="24px"
          className="cards"
        >
          <Box
            display="flex"
            borderRadius="md"
            bgColor="#121A23"
            h="128px"
            w="256px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="card1"
          >
            <p>Development</p>
            <p>328 courses</p>
          </Box>
          <Box
            display="flex"
            borderRadius="md"
            bgColor="#121A23"
            h="128px"
            w="256px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="card1"
          >
            <p>Development</p>
            <p>328 courses</p>
          </Box>
          <Box
            display="flex"
            borderRadius="md"
            bgColor="#121A23"
            h="128px"
            w="256px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="card1"
          >
            <p>Development</p>
            <p>328 courses</p>
          </Box>
          <Box
            display="flex"
            borderRadius="md"
            bgColor="#121A23"
            h="128px"
            w="256px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="card1"
          >
            <p>Development</p>
            <p>328 courses</p>
          </Box>
        </Box>
        <Box
          w="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt="64px"
          className="mos_pop_cour"
        >
          <Heading as="h1" size="lg" noOfLines={2} className="mb-12">
            Most Popular Courses
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            w="80%"
            mb="64px"
            className="cards"
            gap="1.2rem"
          >
            <Box
              w="288px"
              h="83%"
              pb="16px"
              borderRadius="md"
              bgColor="#121A23"
              className="card"
            >
              <Box className="img">
                <Image
                  h="144px"
                  w="full"
                  objectFit="cover"
                  borderBottomRadius="0"
                  borderTopRadius="md"
                  src="https://img.freepik.com/premium-photo/online-education-modern-vector-illustration-happy-junior-school-boy-student-working-pc_839035-526294.jpg?size=626&ext=jpg&ga=GA1.1.1277770292.1712077216&semt=ais"
                  alt=""
                />
              </Box>
              <Box px="16px" className="content px-4">
                <Box
                  display="flex"
                  gap="16px"
                  mt="12px"
                  mb="12px"
                  className="tag"
                >
                  <Button colorScheme="orange" size="xs">
                    Top
                  </Button>
                  <Button colorScheme="red" size="xs">
                    ML
                  </Button>
                </Box>
                <Heading
                  as="h2"
                  size="md"
                  mb="12px"
                  className="course_name mb-3 font-semibold"
                >
                  Machine-Learning A-Z:Hands on Python & R in Data Science
                </Heading>
                <Text className="author_name text-gray-400">Mikey</Text>
              </Box>
            </Box>
            <Box
              w="288px"
              h="83%"
              pb="16px"
              borderRadius="md"
              bgColor="#121A23"
              className="card"
            >
              <Box className="img">
                <Image
                  h="144px"
                  w="full"
                  objectFit="cover"
                  borderBottomRadius="0"
                  borderTopRadius="md"
                  src="https://img.freepik.com/premium-photo/online-education-modern-vector-illustration-happy-junior-school-boy-student-working-pc_839035-526294.jpg?size=626&ext=jpg&ga=GA1.1.1277770292.1712077216&semt=ais"
                  alt=""
                />
              </Box>
              <Box px="16px" className="content px-4">
                <Box
                  display="flex"
                  gap="16px"
                  mt="12px"
                  mb="12px"
                  className="tag"
                >
                  <Button colorScheme="orange" size="xs">
                    Top
                  </Button>
                  <Button colorScheme="red" size="xs">
                    ML
                  </Button>
                </Box>
                <Heading
                  as="h2"
                  size="md"
                  mb="12px"
                  className="course_name mb-3 font-semibold"
                >
                  Machine-Learning A-Z:Hands on Python & R in Data Science
                </Heading>
                <Text className="author_name text-gray-400">Mikey</Text>
              </Box>
            </Box>
            <Box
              w="288px"
              h="83%"
              pb="16px"
              borderRadius="md"
              bgColor="#121A23"
              className="card"
            >
              <Box className="img">
                <Image
                  h="144px"
                  w="full"
                  objectFit="cover"
                  borderBottomRadius="0"
                  borderTopRadius="md"
                  src="https://img.freepik.com/premium-photo/online-education-modern-vector-illustration-happy-junior-school-boy-student-working-pc_839035-526294.jpg?size=626&ext=jpg&ga=GA1.1.1277770292.1712077216&semt=ais"
                  alt=""
                />
              </Box>
              <Box px="16px" className="content px-4">
                <Box
                  display="flex"
                  gap="16px"
                  mt="12px"
                  mb="12px"
                  className="tag"
                >
                  <Button colorScheme="orange" size="xs">
                    Top
                  </Button>
                  <Button colorScheme="red" size="xs">
                    ML
                  </Button>
                </Box>
                <Heading
                  as="h2"
                  size="md"
                  mb="12px"
                  className="course_name mb-3 font-semibold"
                >
                  Machine-Learning A-Z:Hands on Python & R in Data Science
                </Heading>
                <Text className="author_name text-gray-400">Mikey</Text>
              </Box>
            </Box>
            <Box
              w="288px"
              h="83%"
              pb="16px"
              borderRadius="md"
              bgColor="#121A23"
              className="card"
            >
              <Box className="img">
                <Image
                  h="144px"
                  w="full"
                  objectFit="cover"
                  borderBottomRadius="0"
                  borderTopRadius="md"
                  src="https://img.freepik.com/premium-photo/online-education-modern-vector-illustration-happy-junior-school-boy-student-working-pc_839035-526294.jpg?size=626&ext=jpg&ga=GA1.1.1277770292.1712077216&semt=ais"
                  alt=""
                />
              </Box>
              <Box px="16px" className="content px-4">
                <Box
                  display="flex"
                  gap="16px"
                  mt="12px"
                  mb="12px"
                  className="tag"
                >
                  <Button colorScheme="orange" size="xs">
                    Top
                  </Button>
                  <Button colorScheme="red" size="xs">
                    ML
                  </Button>
                </Box>
                <Heading
                  as="h2"
                  size="md"
                  mb="12px"
                  className="course_name mb-3 font-semibold"
                >
                  Machine-Learning A-Z:Hands on Python & R in Data Science
                </Heading>
                <Text className="author_name text-gray-400">Mikey</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mx="96px" w="88%" className="top_teachers">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className="top "
          >
            <Heading as="h1" size="lg" noOfLines={2} className="mb-5">
              Learn from the best teachers
            </Heading>
            <Heading
              as="h1"
              size="md"
              noOfLines={2}
              className="mb-5 underline text-red-600"
            >
              View All
            </Heading>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            className="instructors"
          >
            <Box
              w="208px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              className="card w-52 flex justify-center items-center flex-col "
            >
              <Image
                borderRadius="full"
                boxSize="13 rem"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading as="h1" size="md" noOfLines={2} className="mt-3">
                Tom Holland
              </Heading>
              <Heading
                as="h3"
                size="sm"
                noOfLines={2}
                className="mt-3 text-gray-500"
              >
                Web3 Developer
              </Heading>
            </Box>
            <Box
              w="208px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              className="card w-52 flex justify-center items-center flex-col "
            >
              <Image
                borderRadius="full"
                boxSize="13 rem"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading as="h1" size="md" noOfLines={2} className="mt-3">
                Tom Holland
              </Heading>
              <Heading
                as="h3"
                size="sm"
                noOfLines={2}
                className="mt-3 text-gray-500"
              >
                Web3 Developer
              </Heading>
            </Box>
            <Box
              w="208px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              className="card w-52 flex justify-center items-center flex-col "
            >
              <Image
                borderRadius="full"
                boxSize="13 rem"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading as="h1" size="md" noOfLines={2} className="mt-3">
                Tom Holland
              </Heading>
              <Heading
                as="h3"
                size="sm"
                noOfLines={2}
                className="mt-3 text-gray-500"
              >
                Web3 Developer
              </Heading>
            </Box>
            <Box
              w="208px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              className="card w-52 flex justify-center items-center flex-col "
            >
              <Image
                borderRadius="full"
                boxSize="13 rem"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading as="h1" size="md" noOfLines={2} className="mt-3">
                Tom Holland
              </Heading>
              <Heading
                as="h3"
                size="sm"
                noOfLines={2}
                className="mt-3 text-gray-500"
              >
                Web3 Developer
              </Heading>
            </Box>
            <Box
              w="208px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              className="card w-52 flex justify-center items-center flex-col "
            >
              <Image
                borderRadius="full"
                boxSize="13 rem"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Heading as="h1" size="md" noOfLines={2} className="mt-3">
                Tom Holland
              </Heading>
              <Heading
                as="h3"
                size="sm"
                noOfLines={2}
                className="mt-3 text-gray-500"
              >
                Web3 Developer
              </Heading>
            </Box>
          </Box>
          <Box mt="48px" bgColor="#030C15" mx="0" w="full">
            <Box bgColor="#030C15">
              <Box px="16px" pt="64px" w="full">
                <Box
                  display="grid"
                  gridRowGap="40px"
                  mb="32px"
                  className="lg:grid-cols-6"
                >
                  <Box
                    display="grid"
                    className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4"
                  >
                    <div>
                      <p className="font-medium tracking-wide text-gray-300">
                        Category
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            News
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            World
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Games
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            References
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium tracking-wide text-gray-300">
                        Apples
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Web
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            eCommerce
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Business
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Entertainment
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium tracking-wide text-gray-300">
                        Cherry
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Media
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Brochure
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Nonprofit
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Educational
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Projects
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium tracking-wide text-gray-300">
                        Business
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Infopreneur
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Personal
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Wiki
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            Forum
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Box>
                  <div className="md:max-w-md lg:col-span-2">
                    <span className="text-base font-medium tracking-wide text-gray-300">
                      Subscribe for updates
                    </span>
                    <form className="flex flex-col mt-4 md:flex-row">
                      <input
                        placeholder="Email"
                        required
                        type="text"
                        className="text-black flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-500">
                      Bacon ipsum dolor amet short ribs pig sausage prosciuto
                      chicken spare ribs salami.
                    </p>
                  </div>
                </Box>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                  <p className="text-sm text-gray-500">
                    © Copyright 2020 Lorem Inc. All rights reserved.
                  </p>
                  <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <svg
                        viewBox="0 0 30 30"
                        fill="currentColor"
                        className="h-6"
                      >
                        <circle cx="15" cy="15" r="4" />
                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SitePage;
