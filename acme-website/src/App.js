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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Projects />
      <Schedule />
      <Carousel />
      <Join />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
