import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Projects />
    </div>
  );
}

export default App;
