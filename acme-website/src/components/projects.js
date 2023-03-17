import "./projects.css";

function Projects() {
    return(
        <>
            <div id="projects" className="projects">
                <h1 id="paragraph_header">Projects</h1>
            </div>

            <div className="card_wrapper">
              <div className="card">
                  <div className="card_body">
                      <img class="card_img" src="images/minerwarehouse_logo.png"/>
                      <h2 className="card_title">MinerWarehouse</h2>
                      <p className="card_description">E-Commerce website</p>
                      <button className="card_btn">Learn more</button>
                  </div>
              </div>
            

            
              <div className="card">
                  <div className="card_body">
                      <img class="card_img" src="images/acme_logo.png"/>
                      <h2 className="card_title">ACM-E Website</h2>
                      <p className="card_description">ACM-E website</p>
                      <button className="card_btn">Learn more</button>
                  </div>
              </div>

              <div className="card">
                  <div className="card_body">
                      <img class="card_img" src="images/acme_logo.png"/>
                      <h2 className="card_title">Coming Soon...</h2>
                  </div>
              </div>

            </div>
        </>
    );
}

export default Projects;