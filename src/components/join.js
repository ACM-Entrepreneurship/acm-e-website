import React from 'react';
import './join.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Join() {
    return (
      <>
        <div id="join" className="projects">
          <h1 id="paragraph_header">How to Join</h1>
        </div>
        <section className="d-flex justify-content-center align-items-center">
            
                <Row className="join-cards justify-content-center align-items-center"> {/* Centering the row */}
                    <Col sm={12} md={4}>
                        <div className="join-card">
                            <h2 className="join-h2">Weekly Meetings</h2>
                            <div className="join-p-div">
                                <p className="join-p">Tuesdays at 6:30 PM</p>
                                <p className="join-p">CS Building</p>
                                <p className="join-p">Room 221</p>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} md={4}>
                        <div className="join-card">
                            <h2 className="join-h2">Discord</h2>
                            <div className="join-p-div">
                                <p className="join-p">Join our Discord for updates and discussions!</p>
                                
                                <a href="https://discord.gg/geenvNRg" target="_blank" rel="noopener noreferrer">
                                    <Button variant="warning" className='join-btn'>Our Discord</Button>
                                </a>
                                
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} md={4}>
                        <div className="join-card">
                            <h2 className="join-h2">Interest Form</h2>
                            <div className="join-p-div">
                                <p className="join-p">Fill out the interest form!</p>

                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=vv3-4-n3G0ClGjVeAbBaiVhuhPwePehOn9TEumYtjBdUNzZCODJJWlc1VlVBRVlRTUIxM1oyNVpKNS4u" target="_blank" rel="noopener noreferrer">
                                  <Button variant="warning" className='join-btn'>Form</Button>
                                </a>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            
        </section>
      </>
    );
}

export default Join;
