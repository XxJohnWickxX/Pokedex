// IMPORTACIONES
import React, { Component } from 'react'
import '../styles/Tablero.css'
import { Spinner} from 'reactstrap';

class Img extends Component {
/**Se declara el estado del componente */
    state = {
        imagenUrl: ''
    }

/**Mediante componentDidMount se realiza la peticion asincrona al servidor para poder regresar las 
 * imagenes en el renderizado de la pagina  */
    componentDidMount(){
        const url = this.props.url       
        const pokemonIndex = url.split('/')[url.split('/').length - 2]; 
        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

    this.setState({imagenUrl: imgUrl})
      
}

    render() {
        
        return(
                <table>
                    <tbody>
                        <tr>
                            <img src={this.state.imagenUrl}></img>
                        </tr>
                    </tbody>
                </table> 
        );
    }
}
/**Se exporta el componente */
export default Img;