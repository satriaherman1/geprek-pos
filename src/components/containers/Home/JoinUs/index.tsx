import { Box, Button, Container, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { containerMaxWidth } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";

export default function JoinUs() {
  const bg = useColorModeValue("blackAlpha.900", "gray.900");
  const bgUrl =
    "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
  useAOS();

  return (
    <Box data-aos="fade" position="relative" zIndex={1} bgColor={bg} bgImage={`url("${bgUrl}")`} bgSize="cover" py="12vh">
      <Container maxW={containerMaxWidth}>
        <Box textAlign="center" color="white" position="relative" zIndex={3} maxW="700px" mx="auto">
          <Heading>Mari bergabung bersama kami</Heading>
          <Text marginTop="12px"> Kembangkan bisnismu dengan modal dari kami. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum molestias</Text>
          <Flex justifyContent="center" marginTop="40px" gap="20px">
            <Button colorScheme="blue">Gabung Sekarang!</Button>
            <Button variant="outline" colorScheme="blue">
              Hubungi Kami
            </Button>
          </Flex>
        </Box>
      </Container>
      <Box top={0} bg={bg} position="absolute" zIndex={2} w="full" height="full" opacity="0.9"></Box>
    </Box>
  );
}
