import { Box, Container, Heading } from "@chakra-ui/react";
import Switch from "@src/components/common/Switch";

export default function Navbar() {
  return (
    <Box as="nav" paddingY="20px">
      <Container maxW="1200px" display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h4" size="md">
          InvestKU
        </Heading>

        <Switch />
      </Container>
    </Box>
  );
}
