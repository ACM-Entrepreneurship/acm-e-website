import "./footer.css"
import { BsInstagram, BsLinkedin, BsDiscord} from "react-icons/bs";

function Footer (){
    return(
        <>

          <div class="container">
          <div className="footer">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                  <svg class="bi" width="30" height="24"><use></use></svg>
                </a>
                <span class="mb-3 mb-md-0 text-muted" id="footer_span">Copyright © 2023 ACM Entrepreneurship</span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a href="https://www.instagram.com/acm_entrepreneurship/" target="_blank" rel="noopener noreferrer"><BsInstagram size={38} color={"#E1B768"}/></a></li>
                <li class="ms-3"><a href="https://www.linkedin.com/company/acm-entrepreneurship" target="_blank" rel="noopener noreferrer"><BsLinkedin size={38} color={"#E1B768"}/></a></li>
                <li class="ms-3"><a href="https://discord.gg/geenvNRg" target="_blank" rel="noopener noreferrer"><BsDiscord size={38} color={"#E1B768"}/></a></li>
              </ul>
            </footer>
          </div>
          </div>
        </>
    )
}

export default Footer;