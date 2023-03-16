import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Footer from './components/footer';
import Join from './components/join';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Projects />
      <Join />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
