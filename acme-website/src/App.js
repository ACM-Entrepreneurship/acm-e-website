import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Footer from './components/footer';
import Join from './components/join';
import Accordion from './components/Accordion';
import Carousel from './components/carousel';
import Schedule from './components/schedule';
import Partners from './components/partners';
import HomeSlider from './components/carousel_home';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
  );
}

export default App;
