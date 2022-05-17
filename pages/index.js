import About from "../components/extra/about";
import Carousel from "../components/extra/carousel";
import Contact from "../components/extra/contact";
import Hero from "../components/extra/hero";
import Review from "../components/extra/review";
import Nav from "../components/large/nav";
import { useState, useEffect } from "react";

export default function Home() {
  const [rev, setRev] = useState(false);
  useEffect(() => {
    if(typeof window !== "undefined" && localStorage.getItem('token')){
      setRev(true)
    }
  }, [])
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Carousel />
      {rev && <Review />}
      <Contact />
    </>
  )
}
