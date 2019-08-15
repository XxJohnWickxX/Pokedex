// IMPORTACIONES
import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Tablero.css'


class Columna extends Component {
// SE DECLARA EL ESTADO DEL COMPONENTE
    state = {
        descrip: ''
    }

/**Con la ayuda de la libreria Axios se hace la peticion a la PokeApi para tener los datos sobre los pokemon
 * almacenados en el estado
  */
    componentDidMount(){
        const url = this.props.url
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`; 
    
      axios.get(pokemonUrl).then(res => {
        let descripcion = '';
      res.data.flavor_text_entries.some(flavor => {
          if (flavor.language.name === 'es') {
            descripcion = flavor.flavor_text;
          }
        });
        this.setState({descrip: descripcion})
    })      
}
/**Se renderiza un fragmento de tabla para que se optimize su uso en el componente final */
    render() {
        
        return(
                <table>
                    <tbody>
                        <tr>
                           {this.state.descrip}
                        </tr>
                    </tbody>
                </table> 
            
                 
        );
    }
}

/**Se exporta el componente */
export default Columna;