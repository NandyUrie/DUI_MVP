import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'


class ReunionFinalizada extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2><center>Reunión Finalizada</center></h2>
        <br></br>
        <body><center>Acta Generada</center></body>
      </div>
      );
  }
}

export default ReunionFinalizada