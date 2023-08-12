import './App.css';
import { Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MinerWarehouse from "./pages/miner-wh.js";
import Podcast from "./pages/podcast.js";
import Main from './pages/main';


function App () {
  return (
     <>
       <div className='App'>
        <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/minerwarehouse" element={<MinerWarehouse />} />
           <Route path="/podcast" element={<Podcast />} />
        </Routes>
       </div>
     </>
  );
 };

export default App;
