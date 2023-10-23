import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
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
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Navbar from "../features/navbar";
import { IProducts } from "../interfaces/Product";
import API from "../lib/api";
import Footer from "./footer";
import StoreProductInStore from "./storeProductInStore";

// function randomColor() {
//   return Math.floor(Math.random() * 2);
// }

// const colorList: string[] = ["#E83636", "blue.500"];

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default function Store() {
  // const [colorCode, setColorCode] = useState(colorList[randomColor()]);
  // const { toko, cobaa, setCobaa } = UseProductCreate();
  // console.log("storee", toko);

  const [coba, setCoba] = useState("");
  const [form, setForm] = useState<IProducts>({
    productName: "",
    price: "",
    description: "",
    stock: "",
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

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleCreateProduct();
  }

  async function handleCreateProduct() {
    const token = localStorage.getItem("token");

    console.log(token);
    try {
      const formData = new FormData();
      formData.append("productName", form.productName as string);
      formData.append("price", form.price as string);
      formData.append("description", form.description as string);
      formData.append("stock", form.stock as string);
      formData.append("image", form.image as File);
      const response = await API.post("/product/create", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCoba("serah");
      console.log("Selling Product Success", response);
    } catch (err) {
      console.log(err);
    }
  }
  const [store, setStore] = useState<any>([]);

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const res = await API.get("/store/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStore(res.data);
      setCoba("oke");
    } catch (error) {
      console.error({ error: "salah ya ni" });
    }
  }

  useEffect(() => {
    fetchData();
    setCoba("itu");
    console.log("coba yaaaaaaaa", coba);
  }, [coba == "serah"]);

  return (
    <>
      <Box
        backgroundImage={`linear-gradient(rgba(0, 0, 200, 0.3), rgba(255, 255, 255, 0.2))`}
      >
        <Navbar />
        <Box pt={10}>
          <Flex flexDir={["column", "column", "column", "row"]} p={10} gap={10}>
            <Box>
              <Image
                borderRadius={10}
                minW={"600px"}
                maxW={"600px"}
                maxH={"400px"}
                minH={"400px"}
                objectFit={"cover"}
                src="https://www.mongabay.co.id/wp-content/uploads/2020/07/Falahi-Mubarok-Pengaruh-revisi-Kebijakan-ekpor-Lobster-6-scaled.jpg"
              />
            </Box>
            <Box>
              <Flex flexDirection={"column"} pt={5}>
                <Text fontWeight={"bold"} fontSize={"35px"}>
                  {store?.name}
                </Text>
                <Text fontWeight={"500"} mb={2}>
                  @{store?.userName}
                </Text>
                <Text mt={1}>Deskripsi Toko:</Text>
                <Text w={"390px"} textAlign={"justify"} mb={5}>
                  {store?.description}
                </Text>
                <Rating rating={data.rating} numReviews={data.numReviews} />
                <Box>
                  {/* Form Create Product */}
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
                          <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                          >
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
                </Box>
              </Flex>
            </Box>
          </Flex>
          <StoreProductInStore />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
