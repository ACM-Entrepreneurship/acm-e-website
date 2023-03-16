import "./footer.css"
import { BsInstagram, BsLinkedin, BsDiscord} from "react-icons/bs";

function Footer (){
    return(
        <>
           <div className="footer">
             <footer>
                 <div className="footer_img">
                   <img src="images/acme_logo.png" width="150" height="75" alt="ACME-E Logo"/>
                   <span id="footer_span">Copyright © 2022 ACM Entrepreneurship</span>
                 </div>
 
                 <div>
                   <ul id="footer_content">
                     <li><a href="#"><BsInstagram size={38} color={"#E1B768"}/></a></li>
                     <li><a href="#"><BsLinkedin size={38} color={"#E1B768"}/></a></li>
                     <li><a href="#"><BsDiscord size={38} color={"#E1B768"}/></a></li>
                   </ul>
                 </div>
             </footer>
           </div>
        </>
    )
}

export default Footer;