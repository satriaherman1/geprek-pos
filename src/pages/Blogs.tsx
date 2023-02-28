import { Box, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import BlogBody from "@src/components/containers/Blogs/Body";
import HeaderBlog from "@src/components/containers/Blogs/Header";
import Navbar from "@src/components/fragments/Navbar";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function Blogs() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <>
      <Navbar />
      <Container maxW={containerMaxWidth} display="flex" flexDir={mediumScreen ? "row" : "column"}>
        <Box flexBasis={mediumScreen ? "70%" : "100%"}>
          <HeaderBlog />
          <BlogBody />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
