import { Box, Button, Container, Flex, Heading, Image, List, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";

export default function Footer() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);
  return (
    <Box as="footer">
      <Container maxW={containerMaxWidth}>
        <Flex justifyContent="space-between">
          <Box>
            <Image src="src/images/logo-wide.svg" width="120px" />
            <Text>Satukan Budaya Bangsa</Text>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63416.47709345438!2d110.63127296805919!3d-6.58086131478393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7118d34b9ae3ab%3A0x9d3067f98797ae0f!2sJepara%2C%20Jepara%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1676528548009!5m2!1sen!2sid"
              className="gmaps"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Box flexBasis={mediumScreen ? "100%" : largeScreen ? "60%" : "100%"} flexDir={largeScreen ? "column" : "column-reverse"}>
            <Flex flexDir={mediumScreen ? "row" : "column"}>
              <Box as="section">
                <Heading as="h4" size="md">
                  Tentang Kami
                </Heading>
                <List>
                  <li>
                    <a href="">Kebijakan dan Privasi</a>
                  </li>
                  <li>
                    <a href="">Kisah Sukses</a>
                  </li>
                  <li>
                    <a href="">Syarat dan Ketentuan</a>
                  </li>
                </List>
              </Box>
              <Box as="section">
                <Heading as="h4" size="md">
                  Tentang Kami
                </Heading>
                <List>
                  <li>
                    <a href="">curture@gmail.com</a>
                  </li>
                  <li>
                    <a href="">+6277634589</a>
                  </li>
                  <li>
                    <a href="">Syarat dan Ketentuan</a>
                  </li>
                </List>
              </Box>
              <Box as="section">
                <Heading as="h4" size="md">
                  Tentang Kami
                </Heading>
                <List>
                  <Button>hi</Button>
                </List>
              </Box>
            </Flex>

            <Flex flexDir={largeScreen ? "row" : "column"} justifyContent="space-between" rowGap="10px" rounded="md" mt="20px">
              <section>
                <Heading color="white">Gabung Sekarang!</Heading>
                <Text>Mari bergabung dengan kami</Text>
              </section>
              <Button colorScheme="blue">Gabung Sekarang!</Button>
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Box paddingY="20px">&copy; Muhammad Satria Herman 2023</Box>
    </Box>
  );
}
