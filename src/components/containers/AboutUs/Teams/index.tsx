import { Box, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Teams() {
  const teams = [
    {
      name: "Muhammad Satria Herman",
      title: "Chief Executive Officer",
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1659109168/small_me_3b376cc1eb.jpg",
    },
    {
      name: "Sam Smith",
      title: "Secretary",
      imageUrl: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    },
    {
      name: "Iwan Safrudin",
      title: "Chief Technology Officer",
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1659268088/thumbnail_iwansafr_b0bf99587f.jpg",
    },
    {
      name: "Dimas Ariyanto",
      title: "UI/UX Designer",
      imageUrl: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1659267900/dimas_ec354332df.jpg",
    },
  ];

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  useAOS({ once: true });

  return (
    <Box paddingY="10vh" data-aos="fade">
      <Container maxW={containerMaxWidth}>
        <Heading>Kenali Tim Kami</Heading>
        <Text marginTop="3px">Anggota Tim InvestKU</Text>

        {mediumScreen ? (
          <Flex justifyContent="space-between" marginTop="20px">
            {teams.map((team) => (
              <Box padding="20px 12px" flexBasis="24%" textAlign="center">
                <Image src={team.imageUrl} width="100%" borderRadius="20px" />
                <Heading as="h4" size="md" marginTop="20px">
                  {team.name}
                </Heading>
                <Text marginTop="7px">{team.title}</Text>
              </Box>
            ))}
          </Flex>
        ) : (
          <Swiper
            // effect={"coverflow"}
            // slidesOffsetBefore={20}
            // slidesOffsetAfter={20}
            spaceBetween={20}
            // grabCursor
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            pagination={true}
            modules={[Pagination]}
            className="umkm-swiper"
          >
            {teams.map((team) => (
              <SwiperSlide key={team.imageUrl}>
                <Box padding="20px 12px" flexBasis="24%" textAlign="center">
                  <Image src={team.imageUrl} width="100%" borderRadius="20px" />
                  <Heading as="h4" size="md" marginTop="20px">
                    {team.name}
                  </Heading>
                  <Text marginTop="8px">{team.title}</Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Box>
  );
}
