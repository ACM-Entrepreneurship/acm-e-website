import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/footer'
import "./pages.css";

function Podcast() {
  return (
    <>
    <div className='pages-navbar'>
        <Link to="/">
            <img src="images/acm_e_logo_transparent.png" width="150" height="75" alt="ACME-E Logo"/>
        </Link>
    </div>

    <div className="pages-header">
        <img src="images/group-pic-1.jpg" id="page_header"/>
    </div>

    <div className="paragraph">
        <div className="header">
            <h1 id="paragraph_header">ACM Entrepreneurship's Podcast</h1>
        </div>

        <div className="text">
            <p id="paragraph_text">A description for Podcast</p>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Podcast