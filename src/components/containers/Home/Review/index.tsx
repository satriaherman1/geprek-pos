import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import ReviewCard from "@src/components/fragments/ReviewCard";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { containerMaxWidth } from "@src/definitions/variables";

export default function Review() {
  const reviews = [
    {
      name: "Adam Smith",
      title: "Owner Warung Sholeh",
      description: "Platform yang sangat membantu saya dalam menemukan modal untuk usaha saya",
      photoUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677403240/investment-competition/person/person2_ye3nyr.jpg",
    },
    {
      name: "Adam Smith",
      title: "Owner Warung Sholeh",
      description: "Platform yang sangat membantu saya dalam menemukan modal untuk usaha saya",
      photoUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677403240/investment-competition/person/person2_ye3nyr.jpg",
    },
    {
      name: "Adam Smith",
      title: "Owner Warung Sholeh",
      description: "Platform yang sangat membantu saya dalam menemukan modal untuk usaha saya",
      photoUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677403240/investment-competition/person/person2_ye3nyr.jpg",
    },
  ];
  return (
    <Box marginTop="10vh">
      <Container maxW={containerMaxWidth}>
        <Heading>Review Pengguna</Heading>
        <Text>Testimoni dari pengguna investKU</Text>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {reviews?.map((r: any) => (
            <SwiperSlide>
              <ReviewCard name={r.name} description={r.description} title={r.title} photo={r.photoUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
