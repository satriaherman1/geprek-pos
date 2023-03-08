import { Box, Container, Divider, Flex, Heading, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";

export default function MoreAbout() {
  const bg = useColorModeValue("blue.900", "gray.700");
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  useAOS({ once: true });

  return (
    <Box bg={bg} py="9vh" color="white" data-aos="fade">
      <Container maxW={containerMaxWidth}>
        <Flex position="relative" flexDir={mediumScreen ? "row" : "column"} justifyContent="space-between" gap="30px">
          <Box flexBasis={mediumScreen ? "38%" : "100%"}>
            <Heading>Visi</Heading>
            <Text marginTop="20px">
              crowdfunding. Kami berkomitmen untuk memberikan platform yang mudah diakses dan transparan bagi UMKM untuk mempromosikan bisnis mereka dan mendapatkan dukungan dari masyarakat.
            </Text>
          </Box>

          {mediumScreen && <Box position="absolute" top="0" left="45%" transform="translateX( -50%)" width="1px" height="100%" bg="whiteAlpha.600"></Box>}

          <Flex flexDir="column" rowGap="40px" flexBasis={mediumScreen ? "50%" : "100%"} paddingY="30px" borderTop={mediumScreen ? "unset" : "1px solid #eaeaea"}>
            <Box>
              <Heading>Misi</Heading>

              <Flex flexDir="row" gap="30px" flexWrap="wrap" marginTop={mediumScreen ? "50px" : "20px"}>
                <Box flexBasis={mediumScreen ? "46%" : "100%"}>
                  <Heading>01</Heading>
                  <Text marginTop="14px" color="whiteAlpha.800">
                    Membantu UMKM untuk mencapai potensi penuh mereka dengan meningkatkan akses pendanaan secara mudah dan terjangkau melalui InvestKU.
                  </Text>
                </Box>
                <Box flexBasis={mediumScreen ? "46%" : "100%"}>
                  <Heading>02</Heading>
                  <Text marginTop="14px" color="whiteAlpha.800">
                    Memberikan platform yang aman dan transparan bagi masyarakat untuk mendukung dan berinvestasi pada UMKM yang mereka percayai.
                  </Text>
                </Box>
                <Box flexBasis={mediumScreen ? "46%" : "100%"}>
                  <Heading>03</Heading>
                  <Text marginTop="14px" color="whiteAlpha.800">
                    Memberikan pendampingan dan bimbingan kepada UMKM dalam mempersiapkan kampanye crowdfunding mereka agar lebih efektif dalam mempromosikan bisnis mereka.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
