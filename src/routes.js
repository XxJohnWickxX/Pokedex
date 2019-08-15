import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Hock/Layout';
import Home from './pages/Home'
import Tablero from './components/Tablero'


class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/pokemon-page-1" exact component={Tablero} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;