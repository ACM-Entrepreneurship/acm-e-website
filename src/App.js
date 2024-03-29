import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MinerWarehouse from "./pages/miner-wh.js";
import Podcast from "./pages/podcast.js";
import Main from './pages/main';
import Page404 from './pages/page404';
import Gemsgenesis from './pages/gems-genesis';


function App () {
  return (
     <>
       <div className='App'>
        <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/minerwarehouse" element={<MinerWarehouse />} />
           <Route path="/podcast" element={<Podcast />} />
           <Route path="/gemsgenesis" element={<Gemsgenesis />} />
           <Route path="/*" element={<Page404 />} />
        </Routes>
       </div>
     </>
  );
 };

export default App;
