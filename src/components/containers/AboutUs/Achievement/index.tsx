import { Box, Container, Flex, Heading, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";

export default function Achievement() {
  const bg = useColorModeValue("gray.50", "gray.700");
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  useAOS({ once: true });

  return (
    <Box bg={bg} py="9vh" data-aos="fade">
      <Container maxW="900px" textAlign="center">
        <Heading>tujuan kami adalah untuk membantu umkm menemukan modalnya</Heading>
        <Text marginTop="20px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quidem ipsa quam sapiente a .</Text>

        <Flex rowGap="60px" flexDir={mediumScreen ? "row" : "column"} justifyContent="space-between" textAlign="center" marginTop="50px" maxW="600px" mx="auto">
          <Box>
            <Heading as="h1">200+ </Heading>
            <Text>UMKM</Text>
          </Box>
          <Box>
            <Heading as="h1">400 Juta </Heading>
            <Text>Total Modal</Text>
          </Box>
          <Box>
            <Heading as="h1">90 </Heading>
            <Text>Penghargaan</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
