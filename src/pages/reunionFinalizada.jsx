import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'


class ReunionFinalizada extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2><center>Reunion Finalizada</center></h2>
      </div>
      );
  }
}

export default ReunionFinalizada