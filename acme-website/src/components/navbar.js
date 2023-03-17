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
            <a href=""><img src="images/acme_logo.png" width="150" height="75" alt="ACME-E Logo"/></a>

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