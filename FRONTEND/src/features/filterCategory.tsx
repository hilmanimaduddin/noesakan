"use client";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function FilterCategory() {
  return (
    <Box maxW="6xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={10}
        fontWeight={"bold"}
      >
        Choose Your Category
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Button
          bg={"none"}
          h={"100px"}
          _hover={{
            bg: "none",
          }}
        >
          <StatsCard
            title={"Lihat Semua"}
            stat={"5,000"}
            icon={<FiServer size={"3em"} />}
          />
        </Button>
        <Button
          bg={"none"}
          h={"100px"}
          _hover={{
            bg: "none",
          }}
        >
          <StatsCard
            title={"Terfavorit"}
            stat={"1,000"}
            icon={<BiSolidLike size={"3em"} />}
          />
        </Button>
        <Button
          bg={"none"}
          h={"100px"}
          _hover={{
            bg: "none",
          }}
        >
          <StatsCard
            title={"Lokasi Terdekat"}
            stat={"7"}
            icon={<GoLocation size={"3em"} />}
          />
        </Button>
      </SimpleGrid>
    </Box>
  );
}
