import Hero from "../../components/Hero";
import Highlights from "../../sections/Highlights/Highlights";
import Divisions from "../../sections/Divisions/Divisions";
import Stats from "../../sections/Stats/Stats";
import Products from "../../sections/Products/Products";
import Testimonials from "../../sections/Testimonials/Testimonials";
import ContactPreview from "../../sections/ContactPreview/ContactPreview";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Divisions />
      <Stats />
      <Products />
      <Testimonials />
      <ContactPreview />
      <Footer />
    </>
  );
}

export default Home;