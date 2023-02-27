import { Box, Button, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function Header() {
  const [mediumDevices] = useMediaQuery(mediumBreakpoints);
  return (
    <Box as="header">
      <Container maxW={containerMaxWidth} display="flex" marginY={mediumDevices ? "10vh" : "5vh"} justifyContent="space-between" flexDir={mediumDevices ? "row" : "column-reverse"} rowGap="40px">
        <Box display="flex" alignItems="center" flexBasis={mediumDevices ? "48%" : "100%"}>
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
            <Button marginTop="25px" size="lg" variant="solid" colorScheme="blue">
              Daftar Sekarang!
            </Button>

            <Flex gap="20px">
              <Box>
                <Text marginTop="40px">Diawasi Oleh :</Text>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png" width="120px" />
              </Box>
            </Flex>
          </Box>
        </Box>

        <Flex justifyContent="space-between" flexBasis={mediumDevices ? "48%" : "100%"}>
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
