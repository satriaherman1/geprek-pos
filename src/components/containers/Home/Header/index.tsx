import { Box, BoxProps, Button, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";
import { Link } from "react-router-dom";

export default function Header(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  useAOS({ once: true });

  return (
    <Box {...props} as="header" data-aos="fade">
      <Container maxW={containerMaxWidth} display="flex" marginY={mediumScreen ? "10vh" : "5vh"} justifyContent="space-between" flexDir={largeScreen ? "row" : "column-reverse"} rowGap="40px">
        <Box display="flex" alignItems="center" flexBasis={mediumScreen ? "48%" : "100%"}>
          <Box>
            <Heading size="2xl">
              Temukan Modal Usaha untuk Bisnis{" "}
              <Box as="span" color="blue.500">
                UMKM
              </Box>{" "}
              Anda
            </Heading>
            <Text marginTop="25px" textTransform="capitalize">
              kini mencari modal usaha semudah membuka ponsel hp anda Bersama InvestKU. Cukup dengan mengisikan data UMKM anda dan tunggu verifikasi dari sistem kami untuk mendapatkan dana!
            </Text>
            <Link to="/register">
              <Button className="start-now" marginTop="25px" size="lg" variant="solid" colorScheme="blue">
                Daftar Sekarang!
              </Button>
            </Link>

            <Flex gap="20px">
              <Box>
                <Text marginTop="40px">Diawasi Oleh :</Text>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png" width="120px" />
              </Box>
            </Flex>
          </Box>
        </Box>

        <Flex justifyContent="space-between" flexBasis={mediumScreen ? "48%" : "100%"}>
          <Image
            src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677417509/investment-competition/Group_39_1_qnr4ww.png"
            loading="lazy"
            display="block"
            mx="auto"
            maxH="500px"
            fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
          />
        </Flex>
      </Container>
    </Box>
  );
}
