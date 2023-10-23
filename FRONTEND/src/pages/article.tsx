"use client";

import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// interface IBlogTags {
//   tags: Array<string>;
//   marginTop?: SpaceProps["marginTop"];
// }

// interface Props {
//   marginTop?: number;
//   tags: any[];
// }

// const BlogTags = (props: Props) => {
//   const { marginTop = 0, tags } = props;

//   return (
//     <HStack spacing={2} marginTop={marginTop}>
//       {tags.map((tag) => {
//         return (
//           <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <>
      <Container maxW={"7xl"} p="5" mt={"150px"} bg={"gray.100"} pb={20}>
        <Heading
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"30px"}
          h={"50px"}
          bg={"#E5C13E"}
          mt={"-10"}
          mx={"38%"}
          borderTopRightRadius={"20"}
          borderBottomLeftRadius={"20"}
          color={"blue.900"}
        >
          Baca-Baca Yuk!
        </Heading>
        <Box
          pt={5}
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://images.unsplash.com/photo-1535443120147-89aef0b5327a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            pr={10}
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                Manfaat Mengonsumsi Ikan
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Ikan telah lama menjadi bagian penting dari pola makan manusia di
              seluruh dunia. Selain rasanya yang lezat, ikan juga merupakan
              sumber nutrisi yang kaya dan memiliki banyak manfaat bagi
              kesehatan. Berikut adalah beberapa manfaat mengonsumsi ikan yang
              perlu Anda ketahui:
            </Text>
            <BlogAuthor
              name="Noesakan.id"
              date={new Date("2021-04-06T19:01:27Z")}
            />
            <Link to={"/DetailArticle"}>
              <Text
                mt={3}
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue.600"}
              >
                Baca selengkapnya...
              </Text>
            </Link>
          </Box>
        </Box>
        <Box
          pt={5}
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            pl={10}
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                Nilai Produksi Rp 2,24 T, Laut Banten Jadi Tambang Investasi
                Perikanan
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Jakarta - Penjabat (Pj) Gubernur Provinsi Banten Al Muktabar
              mengatakan Banten memiliki kekayaan alam dan aksesibilitas yang
              menjadi modal dan daya tarik bagi investor.
            </Text>
            <BlogAuthor
              name="Noesakan.id"
              date={new Date("2021-04-06T19:01:27Z")}
            />
            <Link to={"/DetailArticle"}>
              <Text
                mt={3}
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue.600"}
                scrollBehavior={"auto"}
              >
                Baca selengkapnya...
              </Text>
            </Link>
          </Box>

          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://images.unsplash.com/photo-1487335414417-ac48b43a8cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ArticleList;
