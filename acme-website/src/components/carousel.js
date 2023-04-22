import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="team" className="carousel">
        <div className="projects">
          <h1 id="paragraph_header">Team</h1>
        </div>
        <Slider {...settings}>
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
 
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
 
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
 
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
 
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
 
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
 
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
 
           <div className="carousel_card">
             <img src="images/website-card.png" id="team_cards"/>
           </div>
        </Slider>
      </div>
    );
  }
}