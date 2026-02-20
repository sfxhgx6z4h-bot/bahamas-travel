import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Destinations />
      <Packages />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
