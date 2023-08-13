import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/footer'
import "./pages.css";

function Gemsgenesis() {
  return (
    <>
      <div className='pages-navbar'>
          <Link to="/">
              <img src="images/acm_e_logo_transparent.png" width="150" height="75" alt="ACME-E Logo"/>
          </Link>
      </div>

      <div className='header'> <h1 id="paragraph_header">Coming soon...</h1></div>
      <Footer/>
    </>
  )
}

export default Gemsgenesis