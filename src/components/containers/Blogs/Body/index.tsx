import { Box, BoxProps, Container, Divider, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import BlogList from "@src/components/fragments/BlogList";
import { blogData } from "@src/definitions/data";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function BlogBody(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <Box {...props} marginTop="20px" marginBottom="50px">
      <Container maxW={containerMaxWidth}>
        <Heading as="h4" size="md">
          Berita Terbaru
        </Heading>
        <Divider py="10px" />

        <Flex flexDir={mediumScreen ? "row" : "column"} gap="10px" marginTop="30px" flexWrap="wrap">
          {blogData.map((blog) => (
            <BlogList {...blog} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
