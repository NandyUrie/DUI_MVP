import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'
import Nick from '../assets/Nick.jpeg'

import NavBar from '../components/nav_bar'


class HomePage extends Component {
    render() {
        return(
            <div className='page'>
            {/*<h1 className='page__title'>Reunión en Progreso</h1> */}
            <Cabecera />
            <NavBar />
            <h2><center>Bienvenidos</center></h2>
            <img src={Nick} className='App-logo' alt='logo'/>
            </div>
        );
    }
}

export default HomePage