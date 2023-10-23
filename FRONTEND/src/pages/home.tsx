"use client";

import {
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Navbar from "../features/navbar";
import Search from "../features/search";
import ArticleList from "./article";
import Footer from "./footer";
import Product from "./product";
import RoomDiscuss from "./roomDiscuss";
import Testimonials from "./testimonials";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "NOESAKAN.ID",
      text: "Gelombang Perubahan untuk Nelayan.",
      image:
        "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    },
    {
      title: "NOESAKAN.ID",
      text: "Nelayan Pahlawan, Ikan Sehat Inspirasi.",
      image:
        "https://images.unsplash.com/photo-1651991512324-01853380efcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    },
    {
      title: "NOESAKAN.ID",
      text: "Segarnya Ikan, Kenikmatan Sejati.",
      image:
        "https://images.unsplash.com/photo-1503145854865-b4fb2ab87e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    },
  ];

  return (
    <>
      <Navbar />
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"2xl"}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`linear-gradient(rgba(0, 0, 255, 0.2), rgba(0, 0, 0, 0.3)), url(${card.image})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={4}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent="center"
                    color="white"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    textAlign={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent="center"
                    fontSize={{ base: "md", lg: "lg" }}
                    color="white"
                    fontStyle={""}
                  >
                    {card.text}
                  </Text>
                  <Search />
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      {/* <Category /> */}
      <Product />
      <RoomDiscuss />
      <ArticleList />
      <Testimonials />
      <Footer />
    </>
  );
}
