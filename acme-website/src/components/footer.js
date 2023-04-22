import "./footer.css"
import { BsInstagram, BsLinkedin, BsDiscord} from "react-icons/bs";

function Footer (){
    return(
        <>
           <div className="footer">
             <footer>
                 <div className="footer_img">
                   <img src="images/acm_e_logo_transparent.png" width="150" height="75" alt="ACME-E Logo"/>
                   <span id="footer_span">Copyright © 2023 ACM Entrepreneurship</span>
                 </div>
 
                 <div>
                   <ul id="footer_content">
                     <li><a href="https://www.instagram.com/acm_entrepreneurship/" target="_blank" rel="noopener noreferrer"><BsInstagram size={38} color={"#E1B768"}/></a></li>
                     <li><a href="/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={38} color={"#E1B768"}/></a></li>
                     <li><a href="https://discord.gg/geenvNRg" target="_blank" rel="noopener noreferrer"><BsDiscord size={38} color={"#E1B768"}/></a></li>
                   </ul>
                 </div>
             </footer>
           </div>
        </>
    )
}

export default Footer;