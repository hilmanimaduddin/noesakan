import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";
import { FaBook, FaHome, FaImage, FaProductHunt } from "react-icons/fa"; // Import ikon gambar
import { useThreadCard } from "../features/threads/useThread";
import API from "../lib/api";
import { IGetThreads } from "../features/interface/user";
import moment from "moment";

export default function Article() {
  const {
    handleButtonClick,
    handleSubmit,
    handleChange,
    fileInputRef,
    postData,
  } = useThreadCard();

  const [thread, setThread] = useState<IGetThreads[]>([]);

  async function fetchData() {
    try {
      const res = await API.get("/thread/", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setThread(res.data);
    } catch (error) {
      console.error({ error: "salah ya ni" });
    }
  }
  console.log(thread);

  useEffect(() => {
    fetchData();
  }, [postData]);

  return (
    <Box>
      <Center>
        <Box
          display="flex"
          maxW={"100%"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box display={["column", "column", "flex"]}>
            {/* Sidebar (kiri) */}
            <Box w={["100%", "100%", "20%"]}>
              <Box
                position={["relative", "relative", "fixed"]}
                top="0"
                bgColor={"white"}
                h={["fit-content", "fit-content", "100vh"]}
                p={6}
                borderRight="2px solid gray"
              >
                {/* Menu Sidebar */}
                <Stack mt={5} spacing={2} mr={5}>
                  <MenuItem icon={<FaHome />} text="Beranda" />
                  <MenuItem icon={<FaProductHunt />} text="Produk" />
                  <MenuItem icon={<FaBook />} text="Artikel" />
                </Stack>
              </Box>
            </Box>

            {/* Konten Utama (tengah) */}
            <Box flex="1" p={6} w={["100%", "100%", "50%"]}>
              {/* Input Update Status */}
              <Card height={"100px"} bgColor={"white"} p={5}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <Stack direction="row" align="center">
                    <Avatar
                      size="sm"
                      height="40px"
                      width="40px"
                      src="https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                    />
                    <Input
                      placeholder="Apa yang Anda pikirkan?"
                      size="sm"
                      borderRadius="full"
                      bg={"gray.100"}
                      px={4}
                      mr={2}
                      height={"40px"}
                      border="1px solid gray"
                      name="content"
                      onChange={handleChange}
                    />
                    <input
                      type="file"
                      id="fileInput"
                      name="image"
                      style={{ display: "none" }}
                      onChange={handleChange}
                      ref={fileInputRef}
                    />

                    <IconButton
                      aria-label="Upload Gambar"
                      icon={<FaImage />}
                      size="sm"
                      colorScheme="blue"
                      onClick={handleButtonClick}
                    />
                    <Button colorScheme="blue" size="sm" type="submit">
                      Kirim
                    </Button>
                  </Stack>
                </form>
              </Card>

              {/* Daftar Artikel */}
              <Box
                mt={5}
                p={4}
                bgColor={"white"}
                rounded={"md"}
                boxShadow={"md"}
              >
                {thread.map((item, index) => (
                  <Card
                    key={index}
                    bgColor={"white"}
                    marginTop={"15px"}
                    w={"full"}
                    p={2}
                  >
                    <Box mt={6} display="flex" alignItems="center">
                      <Avatar
                        size="md"
                        src={
                          item.user?.image && item.user.image
                            ? item.user.image
                            : "https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                        }
                        // src="https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                      />
                      <Box ml={4}>
                        <Text fontWeight={600} mb={1} color={"black"}>
                          {item.user?.name}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {/* 1 jam yang lalu{" "} */}
                          {moment(item.createdAt).startOf("minute").fromNow()}
                          {/* Ganti dengan waktu upload Anda */}
                        </Text>
                      </Box>
                    </Box>
                    <Box mt={6}>
                      <Text fontWeight={600} mb={2}>
                        {/* Di Cari supplier ikan tuna segar untuk kebutuhan ekspor
                      ikan.. kebutuhan 30 ton, silahkan tawarkan melalui wa:
                      087635242426. */}
                        {item.content}
                      </Text>
                      <Image src={item.image as string} alt="Gambar Terbaru" />
                    </Box>
                    <Box mt={4} display="flex" marginLeft={4}>
                      <Box display="flex" alignItems="center">
                        <Icon
                          as={AiOutlineLike}
                          boxSize={4}
                          color="gray.500"
                          // boxSize={6}
                        />
                        <Text fontSize="sm" ml={1} color="gray.800">
                          10
                        </Text>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        marginLeft={"20px"}
                      >
                        <Icon
                          as={BiComment}
                          boxSize={4}
                          color="gray.500"
                          // boxSize={6}
                        />
                        <Text fontSize="sm" ml={1} color="gray.800">
                          5
                        </Text>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        marginLeft={"20px"}
                      >
                        <Icon
                          as={BiShareAlt}
                          boxSize={4}
                          color="gray.500"
                          // boxSize={6}
                        />
                        <Text fontSize="sm" ml={1} color="gray.800">
                          Bagikan
                        </Text>
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} mt={5}>
                      <Avatar
                        size="sm"
                        height="50px"
                        width="50px"
                        src="https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                      />
                      <Input
                        placeholder="tambahkan komentar"
                        size="sm"
                        borderRadius="full"
                        bg={"gray.100"}
                        px={4}
                        mr={2}
                        height={"40px"}
                        border="1px solid gray"
                        marginLeft={"8px"}
                      />
                      <Button colorScheme="blue" size="sm">
                        komen
                      </Button>
                    </Box>
                  </Card>
                ))}
                {/* Artikel 2 di sebelah kanan */}
                <Card
                  bgColor={"white"}
                  marginTop={"15px"}
                  w={"full"}
                  p={2}
                ></Card>
              </Box>
            </Box>

            {/* Daftar Artikel di sebelah kanan */}
            <Box w={"30%"} p={6} bgColor={"white"}>
              {/* Artikel 1 di sebelah kanan */}
              <ArticleCard1 />

              {/* Artikel 2 di sebelah kanan */}
              <ArticleCard1 />

              {/* Artikel 3 di sebelah kanan */}
              <ArticleCard1 />
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

// Komponen menu dengan ikon
interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
}
function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <Stack
      direction="row"
      align="center"
      spacing={2}
      px={4}
      py={2}
      color="black"
      _hover={{
        bg: "gray.100",
        color: "blue.400",
        cursor: "pointer",
      }}
    >
      {icon}
      <Text fontSize="large" fontWeight={"bold"}>
        {text}
      </Text>
    </Stack>
  );
}

// Komponen Artikel
function ArticleCard1() {
  return (
    <Card
      bgColor={"white"}
      marginTop={"15px"}
      w={"full"}
      p={2}
      style={{
        position: "sticky",
        top: "15px",
        boxShadow:
          "0 4px 6px 3px rgba(173,216,230, 0.5), 0 2px 4px -1px rgba(173,216,230, 0.5)",
      }}
    >
      <Box mt={4} display="flex" alignItems="center">
        <img
          src={
            "https://4.bp.blogspot.com/-l_VdibxIiKM/VPWpwHZBdvI/AAAAAAAACNc/kZ654ZWzGNk/s1600/ikan-segar-muncar.jpg"
          }
          alt="Gambar Terbaru"
          style={{ maxWidth: "100%", maxHeight: "60px" }}
        />
        <Text fontWeight={200} fontSize="md" ml={2} color={"#00BFFF"}>
          Manfaat Mengonsumsi ikan
        </Text>
      </Box>
      <Box mt={2} p={2}>
        <Text fontWeight={100} mb={2} fontSize={"sm"}>
          ikan penuhi kebutuhan protein
        </Text>
        <Text fontSize="sm" color="blue.500" cursor="pointer">
          Baca Selengkapnya
        </Text>
      </Box>
    </Card>
  );
}
