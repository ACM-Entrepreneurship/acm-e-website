import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Footer from './components/footer';
import Join from './components/join';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Projects />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
