import { Box, Container, Flex, Heading, Image, Text, useColorMode, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { boxShadow, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";

export default function Timeline() {
  const bg = useColorModeValue("white", "gray.700");
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);
  const { colorMode } = useColorMode();

  return (
    <Box marginTop="10vh">
      <Container maxW="1200px">
        <Heading>Proses Pendaftaran</Heading>
        <Text>Proses Pendaftaran Crowdfunding</Text>
        <Flex marginTop="30px" textAlign="center" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"} rowGap="30px">
          <Box as="section" flexBasis={largeScreen ? "31%" : mediumScreen ? "48%" : "100%"}>
            <Box width="fit-content" borderRadius="20px" padding="20px" bg={bg} boxShadow={colorMode == "light" ? boxShadow : "unset"}>
              <Image
                src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677383986/investment-competition/Resume_sbtmay.png"
                loading="lazy"
                width="80px"
                height="80px"
                mx="auto"
                marginTop="36px"
                fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
              />
              <Heading as="h3" size="lg" marginTop="39px">
                Isi Data Usaha
              </Heading>

              <Text marginTop="17px">Isi Data Usaha Anda Dengan Lengkap Untuk proses verifikasi di sistem kami. Pastikan data yang anda masukkan valid</Text>
            </Box>
          </Box>
          <Box as="section" flexBasis={largeScreen ? "31%" : mediumScreen ? "48%" : "100%"}>
            <Box width="fit-content" borderRadius="20px" padding="20px" bg={bg} boxShadow={colorMode == "light" ? boxShadow : "unset"}>
              <Image
                src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677383986/investment-competition/Resume_sbtmay.png"
                loading="lazy"
                width="80px"
                height="80px"
                mx="auto"
                marginTop="36px"
                fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
              />
              <Heading as="h3" size="lg" marginTop="39px">
                Isi Data Usaha
              </Heading>

              <Text marginTop="17px">Isi Data Usaha Anda Dengan Lengkap Untuk proses verifikasi di sistem kami. Pastikan data yang anda masukkan valid</Text>
            </Box>
          </Box>
          <Box as="section" flexBasis={largeScreen ? "31%" : mediumScreen ? "48%" : "100%"}>
            <Box width="fit-content" borderRadius="20px" padding="20px" bg={bg} boxShadow={colorMode == "light" ? boxShadow : "unset"}>
              <Image
                src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677383986/investment-competition/Resume_sbtmay.png"
                loading="lazy"
                width="80px"
                height="80px"
                mx="auto"
                marginTop="36px"
                fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
              />
              <Heading as="h3" size="lg" marginTop="39px">
                Isi Data Usaha
              </Heading>

              <Text marginTop="17px">Isi Data Usaha Anda Dengan Lengkap Untuk proses verifikasi di sistem kami. Pastikan data yang anda masukkan valid</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
