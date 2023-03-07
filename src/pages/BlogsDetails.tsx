import { Box, Container, Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import BlogBodyDetails from "@src/components/containers/BlogDetails/Body";
import HeaderBlogDetails from "@src/components/containers/BlogDetails/Header";
import BlogBody from "@src/components/containers/Blogs/Body";
import HeaderBlog from "@src/components/containers/Blogs/Header";
import BlogList from "@src/components/fragments/BlogList";
import Navbar from "@src/components/fragments/Navbar";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function BlogsDetails() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const border = "1px solid #eaeaea";
  return (
    <>
      <Navbar />
      <Container maxW={containerMaxWidth} display="flex" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"}>
        <Box flexBasis={mediumScreen ? "70%" : "100%"}>
          <HeaderBlogDetails />
          <BlogBodyDetails />
        </Box>
        <Box flexBasis={mediumScreen ? "28%" : "100%"} border={border} p="12px 20px" borderRadius="10px" h="fit-content">
          Rekomendasi untuk anda
          <Divider marginTop="9px" />
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
