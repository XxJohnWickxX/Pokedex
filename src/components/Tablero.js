// IMPORTACIONES
import React, { Component } from 'react';
import { Spinner, Table } from 'reactstrap';
import axios from 'axios';
import '../styles/Tablero.css'
import Columna from './Columna'
import Checkboxes from './Check'
import Img from './Img';


class Tablero extends Component {
/**Se declara el estado  */
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150',
        pokemon: null,
        pokemonChecked: false
        
    }
/**se hace una peticion a la PokeApi con ayuda de la libreria de axios con el metodo get
 * de manera asicrona con el uso de async-await y posteriormente con setState se modifica
 * el estado inicial para tener la PokeApi capturada
 */
    async componentDidMount(){
        const api = await axios.get(this.state.url);
        this.setState({pokemon: api.data['results']});
    }
/**se controla el estadp de los checkbox */
    handleCheck () {
        this.setState({pokemonChecked: !this.state.checked});
      }
      
    render() {
        return (
/**Se retorna comenzando con un div para seleccionar un solo lugar de deposito */
            <div className="tablero">
    {/* Se establece el uso del operador ternario para validar que los datos sean obtenidos
    correctamente, de no ser asi aparecera en pantalla un spinner           */}
            {this.state.pokemon ? (
                <Table>
                    <thead>
                    <tr>
                        <th>Selecciona</th>
                        <th>Nombre del Pokemon</th>
                        <th>Imagen</th>
                        <th>Descripcion</th>
                    </tr>
                    </thead>
          {/* Se traen los datos del estado y se accede atodo el arreglo con el metodo "map" el cual nos permite
          entrar a todo el arreglo y recorrerlo ordenadamente  */}
                {this.state.pokemon.map(pokemon => (
                    <tbody key={pokemon.name}>
                    <tr>
                        <th scope="row"> <Checkboxes/> </th>
                        <td className="text">
                            {pokemon.name
                            .toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}
                        </td>
                  {/* Se utiliza el operador ternario para validar si el nombre de los pokemones
                  aparece, de no ser asi aparecera un spinner       */}
                        {this.state.pokemon ? (
                         <td className="text">
                            <Img 
                        name={pokemon.name}
                        url={pokemon.url}
                            />
                        </td>
                        ) : (
                        <span className="spinner">
                            <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                        </span>
                        )}
                    {/* Se importa el componente Columna el cual nos regresa los datos de la descripcion de cada pokemon       */}
                        <td className="text">
                            <Columna 
                        name={pokemon.name}
                        url={pokemon.url}
                            />
                        </td>
                    </tr>
                    </tbody>
                ))}
                    
                </Table>
                                         
                    ) : (
                    <span className="spinner">
                        <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                    </span>
                    )}              
                </div>
               
        );
    }
}
/**Se exporta el componente */
export default Tablero;