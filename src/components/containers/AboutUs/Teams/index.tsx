import { Box, Container, Heading } from "@chakra-ui/react";
import { containerMaxWidth } from "@src/definitions/variables";

export default function Teams() {
  return (
    <Box paddingY="10vh">
      <Container maxW={containerMaxWidth}>
        <Heading>Team Kami</Heading>
      </Container>
    </Box>
  );
}
