import "./projects.css";
import { Link } from "react-router-dom";

function Projects() {
    return(
        <>
            <div id="projects" className="projects">
                <h1 id="paragraph_header">Projects</h1>
            </div>

            <div className="card_wrapper">
              <div className="card_p">
                  <div className="card_body">
                      <img class="card_img" src="images/minerwarehouse_logo.png"/>
                      <h2 className="card_title">MinerWarehouse</h2>
                      <p className="card_description">E-Commerce website</p>
                      <Link to="/minerwarehouse"><button className="card_btn">Learn more</button></Link>
                  </div>
              </div>
            

            
              <div className="card_p">
                  <div className="card_body">
                      <img class="card_img" src="images/acme-card-logo.png"/>
                      <h2 className="card_title">Gems Genesis</h2>
                      <p className="card_description">Gems Genesis</p>
                      <Link to="/gemsgenesis"><button className="card_btn">Learn more</button></Link>
                  </div>
              </div>

              <div className="card_p">
                  <div className="card_body">
                      <img class="card_img" src="images/acme-card-logo.png"/>
                      <h2 className="card_title">Podcast</h2>
                      <p className="card_description">ACM-E's Podcast</p>
                      <Link to="/podcast"><button className="card_btn">Learn more</button></Link>
                  </div>
              </div>

            </div>
        </>
    );
}

export default Projects;