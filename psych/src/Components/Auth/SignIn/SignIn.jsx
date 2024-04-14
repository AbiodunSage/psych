import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

const SignIn = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    logAuth(formInput);
    console.log(formInput);
  };
  const logAuth = (formInput) => {
    if (!formInput.email || !formInput.password) {
      setError("Invalid Email or Password");
    }
  };
  return (
    <>
      <Box
        width="400px"
        borderStyle="solid"
        border="1px"
        borderRadius="5px"
        margin="auto"
        padding="auto"
        shadow="xl"
      >
        <VStack>
          <Text>SEE WHATS HAPPENING</Text>
          <FormControl padding="15px">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formInput.email}
              onChange={handleChange}
            />

            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formInput.password}
              onChange={handleChange}
            />
            <Button
              mt={4}
              ml={20}
              colorScheme="teal"
              type="submit"
              onClick={handleSubmit}
            >
              Log IN
            </Button>
          </FormControl>
          <Box>
            <Flex margin="auto">
              <Avatar src="/google.png" />
              <Button margin="auto">Signin with Google!</Button>
            </Flex>
            <Box padding="10px">
              <Flex>
                <Text>Don't have an account!!!</Text>
                <Button as={ReactRouterLink} to="/signup">
                  SIGN UP
                </Button>
              </Flex>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SignIn;
