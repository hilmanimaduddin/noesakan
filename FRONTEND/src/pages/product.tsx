import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import FilterCategory from "../features/filterCategory";
import Search from "../features/search";
import { PiFishFill } from "react-icons/pi";
import { GiCirclingFish } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../lib/api";

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

export default function Product() {
  const [product, setProduct] = useState<any>([]);

  async function fetchData() {
    try {
      const res = await API.get("/product");
      setProduct(res.data);
    } catch (error) {
      console.error({ error: "salah ya ni" });
    }
  }

  console.log(product);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Box
        background={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(0, 0, 255, 0.1))`}
      >
        <FilterCategory />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor="rgba(255, 255, 255, 1)"
          height={"40px"}
          borderRadius={10}
          mt={10}
          mx={"300px"}
          boxShadow={"md"}
        >
          <Flex
            w={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={2}
          >
            <Flex alignItems={"center"} gap={1}>
              <PiFishFill fontSize={"25px"} />
              <Input
                type="text"
                placeholder="Mau makan ikan apa hari ini?"
                color={"black"}
                border={"none"}
                w={"590px"}
                _hover={{
                  bg: "none",
                  border: "none",
                }}
              />
            </Flex>
            <GiCirclingFish fontSize={"25px"} />
          </Flex>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={6}
          pt={10}
          px={10}
        >
          {product.map((item: any, index: number) => (
            <Box
              key={index}
              scale={1.0}
              _hover={{ scale: 1.1 }}
              boxShadow={"xl"}
              h={"350px"}
              borderRadius={10}
            >
              <Link to={`/productDetail/${item?.id}/#product`}>
                <Flex flexDirection={"column"}>
                  <Box width={"280px"} height={"250px"}>
                    <Image
                      borderTopRightRadius={10}
                      borderTopLeftRadius={10}
                      objectFit={"cover"}
                      h={"100%"}
                      w={"100%"}
                      src={
                        item?.image
                          ? item?.image
                          : "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                      }
                    />
                  </Box>
                  <Flex p={2} flexDirection={"column"}>
                    <Flex
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Text
                        fontSize={"23px"}
                        fontWeight="bold"
                        color={"blue.900"}
                      >
                        {item?.productName}
                      </Text>
                      <Text>Rp.{item?.price}/kg</Text>
                    </Flex>
                    <Text>{item?.store?.city}</Text>
                    <Rating rating={data.rating} numReviews={data.numReviews} />
                  </Flex>
                </Flex>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
