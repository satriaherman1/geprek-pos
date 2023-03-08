import { CloseIcon } from "@chakra-ui/icons";
import { Box, Container, Divider, Flex, Heading, Image, List, ListItem, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import Switch from "@src/components/common/Switch";
import { boxShadow, boxShadowColor, containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isBg, setIsBg] = useState<boolean>(false);

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const hamburgerBg = useColorModeValue("blackAlpha.900", "white");
  const bg = useColorModeValue("white", "#282e39");
  const boxShadow = useColorModeValue(boxShadowColor, "none");

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

  const setBgNavbar = () => {
    window.scrollY > 40 ? setIsBg(true) : setIsBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", setBgNavbar);
    return () => window.removeEventListener("scroll", setBgNavbar);
  });

  console.log(isBg);

  return (
    <Box as="nav" paddingY="20px" fontWeight={500} className="navbar" bg={isBg ? bg : "unset"} boxShadow={isBg ? `0 0 30px ${boxShadow}` : "unset"} position="fixed" top={0} w="full" zIndex={998}>
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

        <Box as="button" className="nav-button" display={mediumScreen ? "none" : "flex"} flexDir="column" gap="7px" onClick={() => setOpenNav(true)}>
          <Box as="span" display="block" width="30px" borderRadius="30px" height="2px" bgColor={hamburgerBg} />
          <Box as="span" display="block" marginLeft="auto" width="23px" borderRadius="30px" height="2px" bgColor={hamburgerBg} />
          <Box as="span" display="block" width="30px" borderRadius="30px" height="2px" bgColor={hamburgerBg} />
        </Box>
      </Container>

      {!mediumScreen && (
        <Box bg={bg} pos="fixed" top={0} left={openNav ? 0 : "-100vw"} h="100vh" w="100vw" transition="0.3s" zIndex={999}>
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
      )}
    </Box>
  );
}
