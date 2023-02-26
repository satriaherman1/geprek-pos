import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { boxShadow } from "@src/definitions/variables";

export default function Timeline() {
  return (
    <Box marginTop="10vh">
      <Container maxW="1200px">
        <Heading>Timeline Pendaftaran</Heading>
        <Flex>
          <Box as="section">
            <Box width="fit-content" borderRadius="100px" padding="20px" bg="white" boxShadow={boxShadow}>
              <Image
                src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677383986/investment-competition/Resume_sbtmay.png"
                loading="lazy"
                width="40px"
                height="40px"
                fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
              />
            </Box>

            <Heading as="h4" size="20px">
              Isi Data Usaha
            </Heading>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
