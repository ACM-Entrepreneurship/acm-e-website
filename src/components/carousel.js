import React, { Component, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

class Card extends Component {
  render() {
    const { imgSrc, name, role, linkedInLink, githubLink, igLink } = this.props.cardData;

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
                {linkedInLink && (
                  <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {igLink && (
                  <a href={igLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function TeamCarousel() {
  const cardDataByYear = {
    "2022-23": [
      {
        imgSrc: "images/rueil.jpg",
        name: "Rueil Manzambi",
        role: "Chair/Co-Founder",
        linkedInLink: "https://www.linkedin.com/in/rueil-manzambi-7b35b51a0/",
        igLink: "https://www.instagram.com/rueilmanzambi/",
      },
      {
        imgSrc: "images/chris.jpg",
        name: "Christopher Guzman",
        role: "Vice-Chair/Co-Founder",
        linkedInLink: "https://www.linkedin.com/in/christopher-guzman-95b11a194",
        igLink: "https://instagram.com/usurperguzman?igshid=MTIzZWQxMDU=",
      },
      {
        imgSrc: "images/don.jpg",
        name: "Dondo Adriel",
        role: "Secretary",
        linkedInLink: "https://www.linkedin.com/in/dondo-adriel-351931235",
        igLink: "https://instagram.com/don__adriel?igshid=YmMyMTA2M2Y=",
      },
      {
        imgSrc: "images/braxton.jpg",
        name: "Braxton Schmedeke",
        role: "Public Relations",
        linkedInLink: "https://www.linkedin.com/in/braxtonschmedeke/",
        igLink: "https://www.instagram.com/braxton_schmedeke/",
      },
      {
        imgSrc: "images/parsa_headshot.jpg",
        name: "Parsa Hajiha",
        role: "Website Director",
        linkedInLink: "https://www.linkedin.com/in/parsa-hajiha/",
        githubLink: "https://github.com/parsa-hj",
        igLink: "https://www.instagram.com/hj.parsa/",
      },
      {
        imgSrc: "images/austen.jpg",
        name: "Austen Solvie",
        role: "Podcast Director",
        linkedInLink: "https://www.linkedin.com/in/austen-solvie-68a142149/",
      },
      {
        imgSrc: "images/kevin.png",
        name: "Kevin Lai",
        role: "Member",
      },
      {
        imgSrc: "images/kiko.png",
        name: "Kiko Perez",
        role: "Member",
      },
      {
        imgSrc: "images/naseem.jpg",
        name: "Naseem Alansari",
        role: "Member",
        linkedInLink: "https://www.linkedin.com/in/naseem-alansari-9ba690190/",
        igLink: "https://www.instagram.com/humblerebels/",
      },
      {
        imgSrc: "images/yuwei.jpg",
        name: "Yuwei Long",
        role: "Member",
      },
      {
        imgSrc: "images/adam.png",
        name: "Adam Camerer",
        role: "Member",
        linkedInLink: "inkedin.com/in/adam-camerer-0ab453251/",
      },
      {
        imgSrc: "images/placeholder.jpg",
        name: "Oleksandra (Sasha)",
        role: "Member",
        linkedInLink: "https://www.linkedin.com/me?trk=p_mwlite_profile_view-secondary_nav",
      },
      {
        imgSrc: "images/placeholder.jpg",
        name: "Tohajie Raet",
        role: "Member",
        linkedInLink: "https://www.linkedin.com/mwlite/in/tohajie-raet-aa8119218",
      },
    ],

    "2023-24": [
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
        name: "Dondo Adriel",
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
    ],
  };

  const [activeYear, setActiveYear] = useState("2023-24"); // Default active year

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
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
      <Tabs
        activeKey={activeYear}
        onSelect={(key) => setActiveYear(key)}
        id="team-tabs"
        className="mb-3"
      >
        {Object.keys(cardDataByYear).map((year) => (
          <Tab eventKey={year} title={year}>
            <Slider {...settings}>
              {cardDataByYear[year].map((cardData, index) => (
                <Card key={index} cardData={cardData} />
              ))}
            </Slider>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
