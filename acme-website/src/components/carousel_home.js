import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true, // Enable autoplay
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000, // Set autoplay interval in milliseconds
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
        <div className="carousel_home_card">
            <img src="images/group-pic-1.jpg" id="home_cards"/>
        </div>

        <div className="carousel_home_card">
            <img src="images/group-pic-2.jpg" id="home_cards"/>
        </div>
        </Slider>
      </div>
    );
  }
}