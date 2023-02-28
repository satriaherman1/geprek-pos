import { Box, BoxProps, Container, Divider, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import BlogList from "@src/components/fragments/BlogList";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function BlogBody(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <Box {...props} marginTop="10vh">
      <Container maxW={containerMaxWidth}>
        <Heading as="h4" size="md">
          Berita Terbaru
        </Heading>
        <Divider py="10px" />

        <Flex flexDir={mediumScreen ? "row" : "column"} gap="10px" marginTop="30px" flexWrap="wrap">
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
        </Flex>
      </Container>
    </Box>
  );
}
