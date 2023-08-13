import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/footer'
import Button from 'react-bootstrap/Button';
import "./pages.css";

function MinerWarehouse() {
  return (
    <>
    <div className='pages-navbar'>
        <Link to="/">
            <img src="images/acm_e_logo_transparent.png" width="150" height="75" alt="ACME-E Logo"/>
        </Link>
    </div>

    <div className="pages-header">
        <img src="images/minerwarehouse_logo.png" id="mw_header"/>
    </div>

    <div className="paragraph">
        <div className="header">
            <h1 id="paragraph_header">Miner Warehouse</h1>
        </div>

        <div className="text">
            <p id="paragraph_text">MinerWarehouse is one of our ambitious projects. Miner Warehouse is an e-commerce platform set to redefine both the shopping experience and campus connectivity. Our initial focus is on showcasing merchandise from fellow student organizations, fostering a 
            sense of strong community spirit and celebrating unique identities on campus. After this step is completed successfully in a period of time, we will make MinerWarehouse available on other college campuses.</p>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default MinerWarehouse