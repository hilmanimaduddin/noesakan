import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Navbar from "../features/navbar";
import API from "../lib/api";
import Footer from "./footer";
import Product from "./product";
import Testimonials from "./testimonials";

function randomColor() {
  return Math.floor(Math.random() * 2);
}

const colorList: string[] = ["#E83636", "blue.500"];

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

export default function DetailProduct() {
  const [colorCode, setColorCode] = useState(colorList[randomColor()]);
  const { id } = useParams();

  const [product, setProduct] = useState<any>([]);
  console.log("product", product);

  async function fetchData() {
    try {
      const res = await API.get(`/product/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error({ error: "salah ya ni" });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Box
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 255, 0.2))`}
      >
        <Navbar />
        <Box pt={10} id="product">
          <Flex p={10} gap={10}>
            <Box height={"400px"} width={"650px"}>
              <Image
                objectFit={"cover"}
                h={"100%"}
                w={"100%"}
                borderRadius={10}
                src={
                  product?.image ??
                  "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=8"
                }
              />
            </Box>
            <Box>
              <Flex flexDirection={"column"} pt={5}>
                <Text fontWeight={"bold"} fontSize={"35px"}>
                  {product?.productName}
                </Text>
                <Text fontSize={"23px"} fontWeight="bold" color="white">
                  Rp.{product?.price}/Kg
                </Text>
                <Text fontWeight={"500"} mb={2}>
                  {product?.store?.name} Store
                </Text>
                <Rating rating={data.rating} numReviews={data.numReviews} />
                <Text mt={5}>Keterangan Produk:</Text>
                <Text w={"390px"} textAlign={"justify"}>
                  {product?.description}
                </Text>
                <Link
                  target="_blank"
                  to={`https://wa.me/${product?.store?.phoneNumber}`}
                >
                  <Button
                    w={"50%"}
                    mt={5}
                    bgColor={`${colorCode}`}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    onClick={() => setColorCode(colorList[randomColor()])}
                  >
                    Hubungi Pembeli
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Product />
          {/* <ProductInDetail /> */}
          <Testimonials />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
