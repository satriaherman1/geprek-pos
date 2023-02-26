import Footer from "@src/components/common/Footer";
import Desc1 from "@src/components/containers/Home/Desc1";
import Header from "@src/components/containers/Home/Header";
import Review from "@src/components/containers/Home/Review";
import Sponsorship from "@src/components/containers/Home/Sponsorship";
import Timeline from "@src/components/containers/Home/Timeline";
import Navbar from "@src/components/fragments/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Sponsorship />
      <Timeline />
      <Desc1 />
      <Review />

      <Footer />
    </>
  );
}
