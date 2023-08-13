import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
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

      <Carousel>

        <Carousel.Item>
          <iframe
              id='page_header'
              title='YouTube Video'
              width='1000'
              height='600'
              src='https://www.youtube.com/embed/sIJgZAIM4fU'
              frameBorder='0'
              allowFullScreen
          ></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe
                id='page_header'
                title='YouTube Video'
                width='1000'
                height='600'
                src='https://www.youtube.com/embed/z7O9XzANyjQ'
                frameBorder='0'
                allowFullScreen
          ></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe
                id='page_header'
                title='YouTube Video'
                width='1000'
                height='600'
                src='https://www.youtube.com/embed/Pki4CbwLdag'
                frameBorder='0'
                  allowFullScreen
          ></iframe>
        </Carousel.Item>

      </Carousel>
    </div>

    <div className="paragraph">
        <div className="header">
            <h1 id="paragraph_header">ACM Entrepreneurship's Podcast</h1>
        </div>

        <div className="text">
            <p id="paragraph_text">We host a podcast, every Saturday at 1pm CDT, where we talk about subjects such as entrepreneurship, 
            technology, and tutorials with guests. If you would like to get in contact with us to be on the podcast send a message/email.</p>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Podcast