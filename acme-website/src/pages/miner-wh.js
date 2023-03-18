import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/footer'
import "./pages.css";

function MinerWarehouse() {
  return (
    <>
    <div className='pages-navbar'>
        <Link to="/">
            <img src="images/acme_logo.png" width="150" height="75" alt="ACME-E Logo"/>
        </Link>
    </div>

    <div className="pages-header">
        <img src="images/group-pic-1.jpg" id="page_header"/>
    </div>

    <div className="paragraph">
        <div className="header">
            <h1 id="paragraph_header">Miner Warehouse</h1>
        </div>

        <div className="text">
            <p id="paragraph_text">A description for Miner MinerWarehouse</p>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default MinerWarehouse