import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import UmkmCard from "@src/components/fragments/UmkmCard";
import { containerMaxWidth } from "@src/definitions/variables";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import "./styles.css";

export default function UmkmList() {
  const bgColor = useColorModeValue("gray.50", "dark.600");
  const responsiveSwiper = {
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    // konfigurasi swiper untuk lebar layar > 768px
    768: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    // konfigurasi swiper untuk lebar layar > 1024px
    1024: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
  };

  const umkmDataList = [
    {
      name: "Rita Fashion",
      description: "Toko baju milik Rita yang di supplai dana pada 2021",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      name: "Doni Coffee",
      description: "Kedai kopi milik Doni yang di supplai dana pada 2020",
      imageUrl: "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Ion Bakery",
      description: "Toko Roti yang di supplai dana pada 2022 lalu",
      imageUrl: "https://images.unsplash.com/photo-1601205741712-b261aff33a7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2782&q=80",
    },
  ];

  return (
    <Box paddingY="10vh" bgColor={bgColor}>
      <Container maxW={containerMaxWidth}>
        <Heading as="h1" size="2xl">
          Daftar UMKM Kami
        </Heading>

        <Swiper
          // effect={"coverflow"}
          // slidesOffsetBefore={20}
          // slidesOffsetAfter={20}
          spaceBetween={20}
          // grabCursor
          // slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={true}
          modules={[Pagination]}
          className="umkm-swiper"
          breakpoints={responsiveSwiper}
        >
          {umkmDataList.map((data) => (
            <SwiperSlide key={data.imageUrl}>
              <UmkmCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
