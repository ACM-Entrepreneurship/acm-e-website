import { Component } from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";

class Navbar extends Component {
    state={clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <>
          <nav>
            <Link to='#home'><img src="images/acm_e_logo_transparent.png" id="acme-logo-r" alt="ACME-E Logo"/></Link>

            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><Link to='#home'>Home</Link></li>
                    <li><Link to='#projects'>Projects</Link></li>
                    <li><Link to='#events'>Events</Link></li>
                    <li><Link to='#team'>Team</Link></li>
                    <li><Link to='#join'>Join</Link></li>
                    <li><Link to='#faq'>FAQ</Link></li>
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