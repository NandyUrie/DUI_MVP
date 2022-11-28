import React, { Component} from 'react'
import Stack from '@mui/material/Stack';
import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'

import grabando from '../assets/rec.png'


class Reunion extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <Stack direction="row" alignItems="left" spacing={2}>
          <h2>Reunión en curso</h2>
          <img src={grabando} className='App-logo fotorec' alt='grabando' width="100" height="50"/>
        </Stack>
        <div class = 'fondonegro' >
          <p>Hola</p>
        </div>
      </div>
      );
  }
}

export default Reunion