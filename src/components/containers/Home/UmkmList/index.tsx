import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { containerMaxWidth } from "@src/definitions/variables";

export default function UmkmList() {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  return (
    <Box paddingY="10vh" bgColor={bgColor}>
      <Container maxW={containerMaxWidth}>
        <Heading as="h1" size="2xl">
          Daftar UMKM Kami
        </Heading>
      </Container>
    </Box>
  );
}
