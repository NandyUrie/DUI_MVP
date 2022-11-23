import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'


class Reunion extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2>Reunión en curso</h2>
      </div>
      );
  }
}

export default Reunion