import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'
import Opciones from '../components/OpcionesReuniones'

import NavBar from '../components/nav_bar'


class HomeReuniones extends Component {
  render() {
      return(
        <div className='page'>
        {/*<h1 className='page__title'>Reunión en Progreso</h1> */}
        <Cabecera />
        <NavBar />
        <h2><center>Reuniones</center></h2>
        <Opciones />
      </div>
      );
  }
}

export default HomeReuniones