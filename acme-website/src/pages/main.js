import Navbar from '../components/navbar';
import Home from '../components/home';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Join from '../components/join';
import Accordion from '../components/Accordion';
import Carousel from '../components/carousel';
import Schedule from '../components/schedule';
import Partners from '../components/partners';
import HomeSlider from '../components/carousel_home';

import React from 'react'

function Main() {
  return (
    <div>
        <Navbar />
        <HomeSlider />
        <Home />
        <Projects />
        <Schedule />
        <Carousel />
        <Join />
        <Accordion />
        <Partners />
        <Footer />
    </div>
  )
}

export default Main