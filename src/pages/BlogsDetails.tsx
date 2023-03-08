import { Box, Container, Divider, Flex, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import BlogBodyDetails from "@src/components/containers/BlogDetails/Body";
import HeaderBlogDetails from "@src/components/containers/BlogDetails/Header";
import BlogBody from "@src/components/containers/Blogs/Body";
import HeaderBlog from "@src/components/containers/Blogs/Header";
import BlogList from "@src/components/fragments/BlogList";
import Navbar from "@src/components/fragments/Navbar";
import { blogData } from "@src/definitions/data";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function BlogsDetails() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const border = "1px solid #eaeaea";
  const borderOptimize = useColorModeValue(border, "none");
  const bg = useColorModeValue("none", "gray.700");

  return (
    <>
      <Navbar />
      <Container maxW={containerMaxWidth} marginTop={mediumScreen ? "120px" : "40px"} display="flex" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"}>
        <Box flexBasis={mediumScreen ? "70%" : "100%"}>
          <HeaderBlogDetails />
          <BlogBodyDetails />
        </Box>
        <Box flexBasis={mediumScreen ? "28%" : "100%"} mb="30px" border={borderOptimize} p="20px" bgColor={bg} borderRadius="10px" h="fit-content">
          Rekomendasi untuk anda
          <Divider marginY="9px" />
          <Flex mt="20px" flexDir="column" rowGap="12px">
            {blogData.map((blog) => (
              <BlogList {...blog} />
            ))}
          </Flex>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
