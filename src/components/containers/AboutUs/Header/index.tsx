import { Box, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";

export default function AboutUsHeader() {
  const bgUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80";
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <Box py="12vh">
      <Container maxW={containerMaxWidth} display="flex" justifyContent="space-between" alignItems="center" flexDir={mediumScreen ? "row" : "column-reverse"} rowGap="20px">
        <Box flexBasis={mediumScreen ? "38%" : "100%"}>
          <Heading as="h1" size="xl" marginTop={mediumScreen ? 0 : "20px"}>
            Kami adalah platform Crowdfunding Dana terbesar
          </Heading>
          <Text marginTop="22px">Menyediakan tempat bagi para UMKM untuk mencari modal bisnisnya. Telah terdaftar dan diawasi oleh OJK sejak tahun 2020</Text>
        </Box>
        <Box flexBasis={mediumScreen ? "48%" : "100%"} pos="relative">
          <Image src={bgUrl} w="full" fallbackSrc={fallbackSrc} borderRadius="10px" />
          <Box zIndex="-1" pos="absolute" top="-20%" right="-20%" width="90%" height="90%" bg="blue.200" borderRadius="10px"></Box>
        </Box>
      </Container>
    </Box>
  );
}
