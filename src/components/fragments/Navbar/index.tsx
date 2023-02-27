import { CloseIcon } from "@chakra-ui/icons";
import { Box, Container, Divider, Flex, Heading, Image, List, ListItem, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import Switch from "@src/components/common/Switch";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const hamburgerBg = useColorModeValue("blackAlpha.900", "white");
  const navSmallBg = useColorModeValue("white", "gray.900");

  const navigationList = [
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Tentang Kami",
      url: "/about-us",
    },
    {
      name: "Blog",
      url: "/blogs",
    },
    {
      name: "Daftar",
      url: "/register",
    },
  ];

  return (
    <Box as="nav" paddingY="20px" fontWeight={500}>
      <Container maxW={containerMaxWidth} display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h4" size="md">
          Invest
          <Box as="span" color="primary.500">
            KU
          </Box>
        </Heading>

        <List display={mediumScreen ? "flex" : "none"} columnGap="40px">
          {navigationList.map((nav) => (
            <ListItem key={nav.url}>
              <Link to={nav.url}>{nav.name}</Link>
            </ListItem>
          ))}
        </List>

        <Box display={mediumScreen ? "flex" : "none"}>
          <Switch />
        </Box>

        <Box as="button" display={mediumScreen ? "none" : "flex"} flexDir="column" gap="7px" onClick={() => setOpenNav(true)}>
          <Box as="span" display="block" width="33px" borderRadius="30px" height="3px" bgColor={hamburgerBg} />
          <Box as="span" display="block" marginLeft="auto" width="26px" borderRadius="30px" height="3px" bgColor={hamburgerBg} />
          <Box as="span" display="block" width="33px" borderRadius="30px" height="3px" bgColor={hamburgerBg} />
        </Box>
      </Container>

      <Box bg={navSmallBg} pos="fixed" top={0} left={openNav ? 0 : "-100vw"} h="100vh" w="100vw" transition="0.3s" zIndex={999}>
        <Flex justifyContent="space-between">
          <Heading as="h4" size="md" margin="20px">
            Invest
            <Box as="span" color="primary.500">
              KU
            </Box>
          </Heading>

          <Box as="button" marginRight="22px" onClick={() => setOpenNav(false)}>
            <CloseIcon />
          </Box>
        </Flex>
        <Divider />
        <List display="flex" flexDir="column" marginTop="20px">
          {navigationList.map((nav) => (
            <ListItem key={nav.url} padding="25px 22px">
              <Link to={nav.url}>{nav.name}</Link>
            </ListItem>
          ))}
        </List>

        <Box position="absolute" left="22px" bottom="10vh">
          <Switch />
        </Box>
      </Box>
    </Box>
  );
}
