// IMPORTACIONES
import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import git from '../images/git.png'
import link from '../images/link.png'
import '../styles/NavFoot.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            
            <Navbar className="nav_">
                <Link to="/">
                    <Navbar.Brand className="title" >Pokedex</Navbar.Brand>
                </Link>
                
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="title">
                    By: Jonathan Lopez
                    <a href="https://github.com/XxJohnWickxX">
                        <img className="links" src={git} alt="gitHub" />
                    </a>
                     <a href="https://www.linkedin.com/in/jonathan-lopez-">
                         <img className="links" src={link} alt="in"/>
                     </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>     
            
        );
    }
}
/**sE EXPORTA EL COMPONENTE */
export default Nav;