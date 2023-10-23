"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
} from "@chakra-ui/react";
import UseProductCreate from "../features/Product/useProductCreate";

// const Blur = (props: IconProps) => {
//   return (
//     <Icon
//       width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
//       zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
//       height="560px"
//       viewBox="0 0 528 560"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <circle cx="71" cy="61" r="111" fill=" #f785ff" />
//       <circle cx="244" cy="106" r="139" fill="#fa8cff" />
//       <circle cy="291" r="139" fill="#a953ff" />
//       <circle cx="80.5" cy="189.5" r="101.5" fill="#c652ff" />
//       <circle cx="196.5" cy="317.5" r="101.5" fill=" #717afd" />
//       <circle cx="70.5" cy="458.5" r="101.5" fill=" #1740f4" />
//       <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
//     </Icon>
//   );
// };

export default function FormCreateProduct() {
  const { form, handleChange, handleSubmit } = UseProductCreate();
  console.log("form", form);

  // async function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
  //   const file = event.target.files?.[0]
  //   if (file){
  //    setForm((prevContent)=>({
  //      ...prevContent,
  //      image : file,
  //    }));
  //   }
  //   };
  // const navigate = useNavigate();

  // const [showPassword, setShowPassword] = useState(false);
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Jual Product</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          {/* <PopoverHeader>Jual Product</PopoverHeader> */}
          <PopoverCloseButton />
          <PopoverBody>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <Box mt={1}>
                <Stack spacing={2}>
                  <FormControl id="productName" isRequired>
                    <FormLabel color={"black"} ml={"10px"}>
                      Nama Product
                    </FormLabel>
                    <Input
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      placeholder="Product Name"
                      type="text"
                      name="productName"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl id="price" isRequired>
                    <FormLabel color={"black"} ml={"10px"}>
                      Harga
                    </FormLabel>
                    <Input
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      placeholder="Price"
                      type="text"
                      name="price"
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
                  <FormControl id="stock" isRequired>
                    <FormLabel color={"black"} ml={"10px"}>
                      Stock
                    </FormLabel>
                    <InputGroup>
                      <Input
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        placeholder="Stock"
                        name="stock"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>
                  <Box>
                    <label htmlFor="image">
                      <Icon
                        float={"right"}
                        fontSize={"30px"}
                        cursor="pointer"
                      ></Icon>
                    </label>
                    <Input
                      onChange={handleChange}
                      name="image"
                      type="file"
                      id="image"
                      hidden
                    />
                  </Box>
                </Stack>
                <Button
                  fontFamily={"heading"}
                  type="submit"
                  // loadingText="Submitting"
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
                  Jual Product
                </Button>
              </Box>
            </form>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
