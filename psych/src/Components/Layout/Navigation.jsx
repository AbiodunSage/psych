import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <nav>
          <Flex>
            <Box>
              <Flex>
                <Avatar />
                <Text margin="auto" padding="2px">
                  ANGEL
                </Text>
              </Flex>
            </Box>
            <Box>
              <Button as={ReactRouterLink} to="/home">
                Home
              </Button>
              <Button as={ReactRouterLink} to="/signup">
                SignUp
              </Button>
            </Box>
          </Flex>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
