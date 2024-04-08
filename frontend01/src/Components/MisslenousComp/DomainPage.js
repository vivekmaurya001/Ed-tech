import React from "react";
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Flex,
  Button,
  Text,
  Stack,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const DomainPage = ({ domainObj }) => {
  return (
    <div className="screen">
      <Box
        backgroundImage={domainObj.url}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="full"
        textColor="white"
        h="24vh"
        border="1px solid black"
        display="flex"
        alignItems="center"
        px="6rem"
      >
        <Stack gap="8px">
          <Heading as="h1" size="3xl" noOfLines={1}>
            {domainObj.Name}
          </Heading>

          <Flex gap="16px">
            <Button colorScheme="gray" size="md">
              Data Analysis
            </Button>
            <Button colorScheme="gray" size="md">
              Machine Learning
            </Button>
            <Button colorScheme="gray" size="md">
              Artificial Analysis
            </Button>
          </Flex>
        </Stack>
      </Box>

      <Stack spacing="1rem">
        <SimpleGrid
          minChildWidth="280px"
          spacing="1rem"
          borderTop="1px solid grey"
          p="1rem"
        >
          <Box w="280px" boxShadow="lg" borderRadius="10px" h="fit-content">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width="full"
              height="16vh"
              objectFit="cover"
              mb="8px"
              borderBottomRadius="0"
            />
            <Flex justify={"space-between"} align="center" p="1rem">
              <Flex gap="8px">
                <Button colorScheme="orange" size="sm">
                  Top
                </Button>
                <Button colorScheme="red" size="sm">
                  ML
                </Button>
              </Flex>
              <Text fontWeight="700">16 Modules</Text>
            </Flex>
            <Text fontWeight="700" fontSize="md" px="1rem">
              Course name
            </Text>
            <Text fontSize="md" px="1rem">
              Course-Prize:6969
            </Text>
            <Stack spacing="3" p="1rem">
              <Flex justifyContent="space-between" alignItems="center">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="10px"
                >
                  <Avatar name="Dan Abrahmov" src="images/pic-2.jpg" />
                  <b>John Doe</b>
                </Box>
                <Button>
                  Veiw
                  <ArrowForwardIcon />
                </Button>
              </Flex>
            </Stack>
          </Box>
          <Box w="280px" boxShadow="lg" borderRadius="10px" h="fit-content">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width="full"
              height="16vh"
              objectFit="cover"
              mb="8px"
              borderBottomRadius="0"
            />
            <Flex justify={"space-between"} align="center" p="1rem">
              <Flex gap="8px">
                <Button colorScheme="orange" size="sm">
                  Top
                </Button>
                <Button colorScheme="red" size="sm">
                  ML
                </Button>
              </Flex>
              <Text fontWeight="700">16 Modules</Text>
            </Flex>
            <Text fontWeight="700" fontSize="md" px="1rem">
              Course name
            </Text>
            <Text fontSize="md" px="1rem">
              Course-Prize:6969
            </Text>
            <Stack spacing="3" p="1rem">
              <Flex justifyContent="space-between" alignItems="center">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="10px"
                >
                  <Avatar name="Dan Abrahmov" src="images/pic-2.jpg" />
                  <b>John Doe</b>
                </Box>
                <Button>
                  Veiw
                  <ArrowForwardIcon />
                </Button>
              </Flex>
            </Stack>
          </Box>
          <Box w="280px" boxShadow="lg" borderRadius="10px" h="fit-content">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width="full"
              height="16vh"
              objectFit="cover"
              mb="8px"
              borderBottomRadius="0"
            />
            <Flex justify={"space-between"} align="center" p="1rem">
              <Flex gap="8px">
                <Button colorScheme="orange" size="sm">
                  Top
                </Button>
                <Button colorScheme="red" size="sm">
                  ML
                </Button>
              </Flex>
              <Text fontWeight="700">16 Modules</Text>
            </Flex>
            <Text fontWeight="700" fontSize="md" px="1rem">
              Course name
            </Text>
            <Text fontSize="md" px="1rem">
              Course-Prize:6969
            </Text>
            <Stack spacing="3" p="1rem">
              <Flex justifyContent="space-between" alignItems="center">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="10px"
                >
                  <Avatar name="Dan Abrahmov" src="images/pic-2.jpg" />
                  <b>John Doe</b>
                </Box>
                <Button>
                  Veiw
                  <ArrowForwardIcon />
                </Button>
              </Flex>
            </Stack>
          </Box>
          <Box w="280px" boxShadow="lg" borderRadius="10px" h="fit-content">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width="full"
              height="16vh"
              objectFit="cover"
              mb="8px"
              borderBottomRadius="0"
            />
            <Flex justify={"space-between"} align="center" p="1rem">
              <Flex gap="8px">
                <Button colorScheme="orange" size="sm">
                  Top
                </Button>
                <Button colorScheme="red" size="sm">
                  ML
                </Button>
              </Flex>
              <Text fontWeight="700">16 Modules</Text>
            </Flex>
            <Text fontWeight="700" fontSize="md" px="1rem">
              Course name
            </Text>
            <Text fontSize="md" px="1rem">
              Course-Prize:6969
            </Text>
            <Stack spacing="3" p="1rem">
              <Flex justifyContent="space-between" alignItems="center">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="10px"
                >
                  <Avatar name="Dan Abrahmov" src="images/pic-2.jpg" />
                  <b>John Doe</b>
                </Box>
                <Button>
                  Veiw
                  <ArrowForwardIcon />
                </Button>
              </Flex>
            </Stack>
          </Box>
          <Box w="280px" boxShadow="lg" borderRadius="10px" h="fit-content">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width="full"
              height="16vh"
              objectFit="cover"
              mb="8px"
              borderBottomRadius="0"
            />
            <Flex justify={"space-between"} align="center" p="1rem">
              <Flex gap="8px">
                <Button colorScheme="orange" size="sm">
                  Top
                </Button>
                <Button colorScheme="red" size="sm">
                  ML
                </Button>
              </Flex>
              <Text fontWeight="700">16 Modules</Text>
            </Flex>
            <Text fontWeight="700" fontSize="md" px="1rem">
              Course name
            </Text>
            <Text fontSize="md" px="1rem">
              Course-Prize:6969
            </Text>
            <Stack spacing="3" p="1rem">
              <Flex justifyContent="space-between" alignItems="center">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="10px"
                >
                  <Avatar name="Dan Abrahmov" src="images/pic-2.jpg" />
                  <b>John Doe</b>
                </Box>
                <Button>
                  Veiw
                  <ArrowForwardIcon />
                </Button>
              </Flex>
            </Stack>
          </Box>
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default DomainPage;
