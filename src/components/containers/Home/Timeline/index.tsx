import { Box, Container, Flex, Heading, Image, Text, useColorMode, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { boxShadow, containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";

export default function Timeline() {
  const bg = useColorModeValue("white", "gray.700");
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);
  const { colorMode } = useColorMode();

  useAOS({ once: true });

  return (
    <Box marginTop={mediumScreen ? "20vh" : "10vh"}>
      <Container maxW={containerMaxWidth}>
        <Heading data-aos="fade">Proses Pendaftaran</Heading>
        <Text data-aos="fade">Proses Pendaftaran Crowdfunding</Text>
        <Flex marginTop="30px" textAlign="center" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"} rowGap="30px">
          <Box as="section" flexBasis={largeScreen ? "31%" : mediumScreen ? "48%" : "100%"} data-aos="fade">
            <Box width="fit-content" borderRadius="20px" padding="25px 25px 40px 25px" bg={bg} boxShadow={colorMode == "light" ? boxShadow : "unset"}>
              <Image
                src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677383986/investment-competition/Resume_sbtmay.png"
                loading="lazy"
                width="80px"
                height="80px"
                mx="auto"
                marginTop="36px"
                fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
              />
              <Heading as="h3" fontSize="24px" marginTop="39px" fontWeight="700">
                Isi Data Usaha
              </Heading>

              <Text marginTop="17px">Isi Data Usaha Anda Dengan Lengkap Untuk proses verifikasi di sistem kami. Pastikan data yang anda masukkan valid</Text>
            </Box>
          </Box>
          <Box as="section" flexBasis={largeScreen ? "31%" : mediumScreen ? "48%" : "100%"} data-aos="fade">
            <Box width="fit-content" borderRadius="20px" padding="25px 25px 40px 25px" bg={bg} boxShadow={colorMode == "light" ? boxShadow : "unset"}>
              <Image
                src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677417818/investment-competition/Search_etknuq.png"
                loading="lazy"
                width="80px"
                height="80px"
                mx="auto"
                marginTop="36px"
                fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
              />
              <Heading as="h3" fontSize="24px" marginTop="39px">
                Verifikasi Data
              </Heading>

              <Text marginTop="17px">Setelah data terisi, tunggu verifikasi yang akan dilakukan oleh sistem kami. Proses ini memerlukan waktu 1 - 2 hari (harus sabar ya ^_^)</Text>
            </Box>
          </Box>
          <Box as="section" flexBasis={largeScreen ? "31%" : mediumScreen ? "48%" : "100%"} data-aos="fade">
            <Box width="fit-content" borderRadius="20px" padding="25px 25px 40px 25px" bg={bg} boxShadow={colorMode == "light" ? boxShadow : "unset"}>
              <Image
                src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677418028/investment-competition/Like_kao0bb.svg"
                loading="lazy"
                width="80px"
                height="80px"
                mx="auto"
                marginTop="36px"
                fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
              />
              <Heading as="h3" fontSize="24px" marginTop="39px">
                Berhasil
              </Heading>

              <Text marginTop="17px">Setelah lolos verifikasi oleh sistem kami, anda tinggal menunggu notif dari para investor dan dapatkan dana hingga milyaran rupiah!</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
