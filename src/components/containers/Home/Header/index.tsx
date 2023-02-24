import { Box, Button, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { mediumBreakpoints } from "@src/definitions/variables";

export default function Header() {
  const mediumDevices = useMediaQuery(mediumBreakpoints);
  return (
    <Box as="header">
      <Container maxW="1200px" display="flex" marginY="10vh">
        <Box flexBasis={mediumBreakpoints ? "48%" : "100%"}>
          <Heading size="xl">Kembangkan Modal untuk Bisnis Anda</Heading>
          <Text marginTop="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore quasi consectetur sapiente nesciunt in fugiat et explicabo eligendi reprehenderit!</Text>
          <Button marginTop="25px" size="lg" variant="solid" colorScheme="blue">
            Daftar Sekarang!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
