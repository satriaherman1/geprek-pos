import { Box, Container, Flex, Heading, Image, Text, useMediaQuery, Icon, BoxProps } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function AboutUsHeader(props: BoxProps) {
  const bgUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80";
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  // useAOS({ once: true });

  return (
    <Box {...props} py="12vh">
      <Container maxW={containerMaxWidth} display="flex" justifyContent="space-between" alignItems="center" flexDir={mediumScreen ? "row" : "column-reverse"} rowGap="20px">
        <Box flexBasis={mediumScreen ? "38%" : "100%"}>
          <Heading as="h1" size="xl" marginTop={mediumScreen ? 0 : "20px"}>
            Kami adalah platform Crowdfunding Dana terbesar
          </Heading>
          <Text marginTop="22px">Menyediakan tempat bagi para UMKM untuk mencari modal bisnisnya. Telah terdaftar dan diawasi oleh OJK sejak tahun 2020</Text>

          <Flex gap="20px">
            <Box>
              <Text marginTop="40px">Diawasi Oleh :</Text>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png" width="120px" />
            </Box>
          </Flex>
        </Box>
        <Box flexBasis={mediumScreen ? "48%" : "100%"} pos="relative">
          <Image src={bgUrl} w="full" fallbackSrc={fallbackSrc} borderRadius="10px" />
          <Box zIndex="-1" pos="absolute" top="-20%" right="-20%" width="90%" height="90%" bg="blue.200" borderRadius="10px"></Box>
        </Box>
      </Container>
    </Box>
  );
}
