import React from 'react'

import Nav from '../components/Nav'
import Footer from '../components/Footer';

const Layout = (props) => {
         return (
            <div className="App">
                <Nav/>
                    <div className="main-content">
                        {props.children}
                    </div>
                <Footer/>
            </div>
        );
    }

export default Layout;