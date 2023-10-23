"use client";

import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconProps,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { IUserRegister } from "../interfaces/User";
import API from "../lib/api";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill=" #f785ff" />
      <circle cx="244" cy="106" r="139" fill="#fa8cff" />
      <circle cy="291" r="139" fill="#a953ff" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#c652ff" />
      <circle cx="196.5" cy="317.5" r="101.5" fill=" #717afd" />
      <circle cx="70.5" cy="458.5" r="101.5" fill=" #1740f4" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default function SignupCard() {
  const [form, setForm] = useState<IUserRegister>({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      const response = await API.post("/auth/register", form);
      navigate("/auth/login");
      console.log("register berhasil", response);
    } catch (err) {
      console.log(err);
    }
  }
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box
      position={"relative"}
      objectFit={"cover"}
      bgImage={
        "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
      w={"full"}
    >
      <Container
        as={SimpleGrid}
        maxW={"100%"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            color={"blue.800"}
            ml={"30px"}
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            className="animated-text"
          >
            WELCOME TO NOESAKAN.ID
          </Heading>
        </Stack>
        <Card
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          bgGradient="linear(to-t, #f06, #0c0, #00f)"
          bgClip="text"
          color="transparent"
        >
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                textShadow="0 2px 4px rgba(0,0,128, 0.4)"
              >
                Daftar Akun Noesakan
              </Heading>
            </Stack>
            <Box as={"form"} mt={5}>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel color={"black"} ml={"10px"}>
                    Nama Lengkap
                  </FormLabel>
                  <Input
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="username" isRequired>
                  <FormLabel color={"black"} ml={"10px"}>
                    Username
                  </FormLabel>
                  <Input
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    placeholder="Username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel color={"black"} ml={"10px"}>
                    Email
                  </FormLabel>
                  <Input
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    placeholder="firstname@lastname.io"
                    type="text"
                    name="email"
                    onChange={handleChange}
                  />
                </FormControl>
                {/* <FormControl id="pnumber" isRequired>
                <FormLabel color={"black"} ml={"10px"}>Nomor Telepon</FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Phone Number"
                  type="text"
                  name="pnumber"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel color={"black"} ml={"10px"}>Alamat</FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Alamat"
                  type="text"
                  name="address"
                  onChange={handleChange}
                /> */}
                {/* </FormControl> */}
                <FormControl id="password" isRequired>
                  <FormLabel color={"black"} ml={"10px"}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                {/* <Button fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
                Upload Foto
              </Button> */}
              </Stack>
              <Button
                fontFamily={"heading"}
                onClick={handleRegister}
                loadingText="Submitting"
                mt={8}
                w={"full"}
                bgColor={"blue.800"}
                bgGradient="linear(to-r, blue.400,blue.800)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, blue.500,blue.900)",
                  boxShadow: "xl",
                }}
              >
                Register
              </Button>
              <Stack pt={6}>
                <Text
                  color={"black"}
                  align={"center"}
                  onClick={() => navigate("/auth/login")}
                >
                  Sudah punya akun? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Box>
            form
          </Stack>
        </Card>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}
