import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'


class ReunionCreada extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2><center>Reunion Creada</center></h2>
      </div>
      );
  }
}

export default ReunionCreada