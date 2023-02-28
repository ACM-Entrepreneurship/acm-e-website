import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
