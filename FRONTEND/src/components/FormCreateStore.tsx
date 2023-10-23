"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconProps,
  Input,
  InputGroup,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IStoreCreate } from "../interfaces/Store";
import API from "../lib/api";

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

export default function FormCreateStore() {
  const [form, setForm] = useState<IStoreCreate>({
    name: "",
    userName: "",
    province: "",
    city: "",
    district: "",
    description: "",
    phoneNumber: "",
    age: "",
    bankAccount: "",
    image: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  async function handleCreateStore() {
    const token = localStorage.getItem("token");
    try {
      const formData = new FormData();
      formData.append("name", form.name as string);
      formData.append("userName", form.userName as string);
      formData.append("province", form.province as string);
      formData.append("city", form.city as string);
      formData.append("district", form.district as string);
      formData.append("description", form.description as string);
      formData.append("phoneNumber", form.phoneNumber as string);
      formData.append("age", form.age as string);
      formData.append("bankAccount", form.bankAccount as string);
      formData.append("image", form.image as File);
      const response = await API.post("/store/create", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("registrasion Store Success", response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  // async function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
  //   const file = event.target.files?.[0]
  //   if (file){
  //    setForm((prevContent)=>({
  //      ...prevContent,
  //      image : file,
  //    }));
  //   }
  //   };
  const navigate = useNavigate();

  // const [showPassword, setShowPassword] = useState(false);
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
        spacing={{ base: 4, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 1 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            color={"blue.800"}
            ml={"30px"}
            lineHeight={1.1}
            mt={"100px"}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            className="animated-text"
          >
            WELCOME TO NOESAKAN.ID
          </Heading>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 4 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={2}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              textShadow="0 2px 4px rgba(0,0,128, 0.4)"
            >
              Daftar Store Noesakan
            </Heading>
          </Stack>
          <Box as={"form"} mt={1}>
            <Stack spacing={2}>
              <FormControl id="name" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Nama Toko
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
              <FormControl id="userName" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Nama Lain
                </FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Username Store"
                  type="text"
                  name="userName"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="province" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Provinsi
                </FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Province"
                  type="text"
                  name="province"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="city" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Kota
                </FormLabel>
                <InputGroup>
                  <Input
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    placeholder="City"
                    type="text"
                    name="city"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="district" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Kecamatan
                </FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="District"
                  type="text"
                  name="district"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Deskripsi
                </FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Description"
                  type="text"
                  name="description"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="phoneNumber" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Nomor Telepon
                </FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Phone Number"
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="age" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Tanggal Lahir
                </FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Age"
                  type="text"
                  name="age"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="bankAccount" isRequired>
                <FormLabel color={"black"} ml={"10px"}>
                  Bank Akun
                </FormLabel>
                <Input
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  placeholder="Bank Account"
                  type="text"
                  name="bankAccount"
                  onChange={handleChange}
                />
              </FormControl>
              <Box>
                <label htmlFor="img">
                  <Icon
                    float={"right"}
                    fontSize={"30px"}
                    cursor="pointer"
                  ></Icon>
                </label>
                <Input
                  // onChange={handleImageChange}
                  name="file"
                  type="file"
                  id="img"
                  hidden
                  onChange={handleChange}
                />
              </Box>
            </Stack>
            <Button
              fontFamily={"heading"}
              onClick={handleCreateStore}
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
              Buat Toko
            </Button>
            {/* <Stack pt={6}>
              <Text color={"black"} align={'center'} onClick={()=> navigate("/auth/login")}>
                Sudah punya akun? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack> */}
          </Box>
          form
        </Stack>
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
