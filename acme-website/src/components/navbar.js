import { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
    state={clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <>
          <nav>
            <a href="/#home"><img src="acme-website/public/images/acm_e_logo_transparent.png" id="acme-logo-r" alt="ACME-E Logo"/></a>

            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#events">Events</a></li>
                    <li><a href="/#team">Team</a></li>
                    <li><a href="/#join">Join</a></li>
                    <li><a href="/#faq">FAQ</a></li>
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </nav>
        </>
    )
}
}

export default Navbar;