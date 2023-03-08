import { Box, Container, Divider, Flex, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import BlogBody from "@src/components/containers/Blogs/Body";
import HeaderBlog from "@src/components/containers/Blogs/Header";
import BlogList from "@src/components/fragments/BlogList";
import Navbar from "@src/components/fragments/Navbar";
import { blogData, successStories } from "@src/definitions/data";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function Blogs() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  const bg = useColorModeValue("none", "gray.700");
  const border = "1px solid #eaeaea";
  const borderOptimize = useColorModeValue(border, "none");

  return (
    <>
      <Navbar />
      <Container maxW={containerMaxWidth} marginTop={mediumScreen ? "100px" : "40px"} display="flex" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"}>
        <Box flexBasis={mediumScreen ? "70%" : "100%"}>
          <HeaderBlog />
          <BlogBody />
        </Box>
        <Box flexBasis={mediumScreen ? "28%" : "100%"}>
          <Box flexBasis={mediumScreen ? "28%" : "100%"} mt="0px" mb="20px" border={borderOptimize} p="20px" bgColor={bg} borderRadius="10px" h="fit-content">
            Tutorial untuk anda
            <Divider marginY="9px" />
            <Flex mt="20px" flexDir="column" rowGap="12px">
              {blogData.map((blog) => (
                <BlogList {...blog} />
              ))}
            </Flex>
          </Box>
          <Box flexBasis={mediumScreen ? "28%" : "100%"} mt="0px" mb="30px" border={borderOptimize} p="20px" bgColor={bg} borderRadius="10px" h="fit-content">
            Cerita Sukses
            <Divider marginY="9px" />
            <Flex mt="20px" flexDir="column" rowGap="12px">
              {successStories.map((story) => (
                <BlogList {...story} />
              ))}
            </Flex>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
