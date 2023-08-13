import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

class Card extends Component {
  render() {
    const { imgSrc, name, role, twitterLink, linkedInLink, githubLink, emailLink, igLink } = this.props.cardData;

    const socialIcons = [];

    // Conditionally add social media icons and links based on data availability
    if (linkedInLink) {
      socialIcons.push(
        <a key="linkedin" href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      );
    }

    if (githubLink) {
      socialIcons.push(
        <a key="github" href={githubLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      );
    }

    if (igLink) {
      socialIcons.push(
        <a key="instagram" href={igLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      );
    }

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

                {socialIcons}

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
        imgSrc: "images/braxton.jpg",
        name: "Braxton Schmedeke",
        role: "Chair",
        linkedInLink: "https://www.linkedin.com/in/braxtonschmedeke/",
        igLink: "https://www.instagram.com/braxton_schmedeke/",
      },
      {
        imgSrc: "images/parsa_headshot.jpg",
        name: "Parsa Hajiha",
        role: "Vice-Chair",
        linkedInLink: "https://www.linkedin.com/in/parsa-hajiha/",
        githubLink: "https://github.com/parsa-hj",
        igLink: "https://www.instagram.com/hj.parsa/",
      },
      {
        imgSrc: "images/don.jpg",
        name: "Dondo Adriel ",
        role: "Entrepreneurship and Innovation",
        linkedInLink: "https://www.linkedin.com/in/dondo-adriel-351931235",
        igLink: "https://instagram.com/don__adriel?igshid=YmMyMTA2M2Y=",
      },
      {
        imgSrc: "images/naseem.jpg",
        name: "Naseem Alansari",
        role: "Public Relations",
        linkedInLink: "https://www.linkedin.com/in/naseem-alansari-9ba690190/",
        igLink: "https://www.instagram.com/humblerebels/",
      },
      {
        imgSrc: "images/kevin.png",
        name: "Kevin Lai",
        role: "Technical Operations",
      },
      {
        imgSrc: "images/kiko.png",
        name: "Kiko Perez",
        role: "Financial Advisor",
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
