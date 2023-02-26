import { Box, Container, Heading, Image, List, ListItem, useMediaQuery } from "@chakra-ui/react";
import Switch from "@src/components/common/Switch";
import { mediumBreakpoints } from "@src/definitions/variables";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box as="nav" paddingY="20px">
      <Container maxW="1200px" display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h4" size="md">
          Invest
          <Box as="span" color="primary.500">
            KU
          </Box>
        </Heading>

        <List display={mediumScreen ? "flex" : "none"} columnGap="40px">
          <ListItem>
            <Link to="/">Beranda</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Tentang Kami</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Daftar</Link>
          </ListItem>
        </List>

        <Switch />
      </Container>
    </Box>
  );
}
