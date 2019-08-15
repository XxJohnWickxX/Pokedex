// IMPORTACIONES
import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap'
import '../styles/NavFoot.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <Jumbotron fluid>
            <Container>
                <h6>Correo electronico: tumjoncrm@gmail.com</h6>
                <br/>
                <h6>Celular: 56 1168 7325</h6>
            </Container>
            </Jumbotron>
            </div>
            
        );
    }
}
/**se exportar el componente */
export default Footer;