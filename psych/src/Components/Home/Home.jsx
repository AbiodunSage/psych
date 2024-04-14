import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import React from "react";

const Home = () => {
  return (
    <Box>
      <Flex>
        <Box margin="auto">
          <Image
            boxSize="xl"
            borderRadius="50px"
            boxShadow="dark-lg"
            src="/prog.jpg"
            alt="image"
          />
        </Box>
        <Box margin="auto" boxShadow="xl">
          <Button as={ReactRouterLink} to="/signup" bg="#0a5cf5">
            Welcome to SAGEWORLD
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
