import { Box, Container, Icon, Flex, Heading, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function WhoAreWe() {
  const bg = useColorModeValue("blue.900", "gray.700");
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  useAOS({ once: true });

  return (
    <Box bg={bg} py="9vh" color="white" data-aos="fade">
      <Container maxW="700px" textAlign="center">
        <Heading>Siapa Kita?</Heading>
        <Text marginTop="20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis commodi eius maiores impedit beatae culpa cum odio, mollitia, eligendi corporis officia quibusdam. Earum,
          error.
        </Text>
        <Flex marginTop="19px" gap="12px" color="white.700" justifyContent="center">
          <Box as="a">
            <Icon as={FaFacebook} />
          </Box>
          <Box as="a">
            <Icon as={FaInstagram} />
          </Box>
          <Box as="a">
            <Icon as={FaTwitter} />
          </Box>
          <Box as="a">
            <Icon as={FaWhatsapp} />
          </Box>
          <Box as="a">
            <Icon as={FaLinkedin} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
