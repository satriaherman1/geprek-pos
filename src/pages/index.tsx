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
      <Review />
    </>
  );
}
