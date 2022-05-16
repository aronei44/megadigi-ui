import About from "../components/extra/about";
import Carousel from "../components/extra/carousel";
import Contact from "../components/extra/contact";
import Hero from "../components/extra/hero";
import Review from "../components/extra/review";
import Nav from "../components/large/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Carousel />
      <Review />
      <Contact />
    </>
  )
}
