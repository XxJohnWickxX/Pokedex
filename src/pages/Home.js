import React, { Component } from 'react';
import Boton from '../components/Boton'
import '../styles/Home.css'
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className="container">
            <div className="home">
                <h1>Bienvenido al Pokedex </h1>
                <br/>
                <h2>Creado por para la preba de Front-end</h2>
                <br/>
                <Link to="/pokemon-page-1">
                    <Boton/>
                </Link>
                
            </div>
                

                
            </div>
        );
    }
}

export default Home;