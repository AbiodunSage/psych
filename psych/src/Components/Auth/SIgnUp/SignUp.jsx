import React, { useState } from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Flex,
  Avatar,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { app, auth } from "../../../Firebase/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //signed up
    const user = userCredential.user;
    //...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //..
  });
const SignUp = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    errors: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!formInput.username) {
      errors.username = "Please enter a username.";
    }

    if (!formInput.fullName) {
      errors.fullName = "Please enter your full name.";
    }

    if (!formInput.email) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInput.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formInput.password) {
      errors.password = "Please enter a password.";
    } else if (formInput.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    setFormInput({ ...formInput, errors }); // Update state with errors
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
      errors: { ...formInput.errors, [event.target.name]: "" }, // Clear error on change
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      console.log("Signup successful:", formInput);
      // Replace with your actual signup logic (e.g., API call)
      navigate("/signin"); // Redirect to home page on success (optional)
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
          <div>JOIN US</div>
          <FormControl padding="15px">
            <FormLabel>Username</FormLabel>
            <Input
              id="FormUsername"
              fontSize={14}
              type="text"
              size={"sm"}
              name="username"
              value={formInput.username}
              onChange={handleChange}
            />
            {formInput.errors.username && (
              <Text color="red">{formInput.errors.username}</Text>
            )}

            <FormLabel>Full Name</FormLabel>
            <Input
              id="FormFullName"
              fontSize={14}
              type="text"
              size={"sm"}
              name="fullName"
              value={formInput.fullName}
              onChange={handleChange}
            />
            {formInput.errors.fullName && (
              <Text color="red">{formInput.errors.fullName}</Text>
            )}

            <FormLabel>Email Address</FormLabel>
            <Input
              id="FormEmail"
              fontSize={14}
              type="email"
              size={"sm"}
              name="email"
              value={formInput.email}
              onChange={handleChange}
            />
            {formInput.errors.email && (
              <Text color="red">{formInput.errors.email}</Text>
            )}

            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                id="FormPassword"
                fontSize={14}
                type={showPassword ? "text" : "password"}
                size={"sm"}
                name="password"
                value={formInput.password}
                onChange={handleChange}
              />
              <InputRightElement>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button mt={4} w={"full"} colorScheme="teal" onClick={handleSubmit}>
              Sign Up
            </Button>
          </FormControl>
          <Box>
            <Flex margin="auto">
              <Avatar src="/google.png" />
              <Button margin="auto">SignUP with Google!</Button>
            </Flex>
            <Box padding="10px">
              Already have an account!!!
              <Button as={ReactRouterLink} to="/signin">
                LOG IN
              </Button>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SignUp;
