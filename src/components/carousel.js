import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

class Card extends Component {
  render() {
    const { imgSrc, name, role, twitterLink, linkedInLink, githubLink, emailLink } = this.props.cardData;
    return (
      <div className="card_section">
        <div className="row_team">
          <div className="column_team">
            <div className="card_team">
              <div className="img_container_team">
                <img src={imgSrc} alt={name} />
              </div>
              <h3>{name}</h3>
              <p>{role}</p>
              <div className="icons_team">

                <a href={linkedInLink}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={githubLink}>
                  <i className="fab fa-github"></i>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class Carousel extends Component {
  render() {
    const cardDataList = [
      {
        imgSrc: "images/parsa_headshot.jpg",
        name: "Luna Turner",
        role: "Founder",
        linkedInLink: "#",
        githubLink: "#",
      },
      {
        imgSrc: "images/parsa_headshot.jpg",
        name: "Luna Turner",
        role: "Founder",
        linkedInLink: "#",
        githubLink: "#",
      },
      {
        imgSrc: "images/parsa_headshot.jpg",
        name: "Luna Turner",
        role: "Founder",
        linkedInLink: "#",
        githubLink: "#",
      },
      {
        imgSrc: "images/parsa_headshot.jpg",
        name: "Luna Turner",
        role: "Founder",
        linkedInLink: "#",
        githubLink: "#",
      },
      {
        imgSrc: "images/parsa_headshot.jpg",
        name: "Luna Turner",
        role: "Founder",
        linkedInLink: "#",
        githubLink: "#",
      },
      // add more card data objects as needed
    ];

    const settings = {
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
          {cardDataList.map((cardData, index) => (
            <Card key={index} cardData={cardData} />
          ))}
        </Slider>
      </div>
    );
  }
}
