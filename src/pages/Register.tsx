import { useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import Form from "@src/components/containers/Register/Form";
import Navbar from "@src/components/fragments/Navbar";
import { mediumBreakpoints } from "@src/definitions/variables";

export default function Register() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <>
      <Navbar />
      <Form marginTop={mediumScreen ? "140px" : "100px"} />
      <Footer />
    </>
  );
}
