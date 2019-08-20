import React, { Component } from 'react';
import Boton from '../components/Boton'
import '../styles/Home.css'



class Home extends Component {
    render() {
        return (
            <div className="container">
            <div className="home">
                <h1>Bienvenido al Pokedex </h1>
                <br/>
                <h2>Creado por para la prueba de Front-end</h2>
                <br/>
                <Boton/>                
            </div>
                

                
            </div>
        );
    }
}

export default Home;