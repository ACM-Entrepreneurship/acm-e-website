import "./partners.css";

function Partners() {
    return (
        <>
            <div className="projects">
                <h1 id="paragraph_header">Our Partners</h1>
            </div>
            <div class="partners-row">
                <div class="partners-column">
                    <a href="https://www.mst.edu/" target="_blank" rel="noopener noreferrer"><img src="images/mst-logo.png" id="partners-img"/></a>
                </div>
                <div class="partners-column">
                    <a href="https://mstacm.org/" target="_blank" rel="noopener noreferrer"><img src="images/acm-logo.png" id="partners-img"/></a>
                </div>
            </div>
        </>
    );
}

export default Partners;