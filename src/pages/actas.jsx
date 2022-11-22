import React, { Component} from 'react'
import { Button } from '@mui/material'
import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

//NavBar -> Se crea automáticamente con lo que le pongamos

class Actas extends Component {
  render() {
      return(
        <div className='page'>
          <Cabecera />
          <NavBar />  
          <h2><center>Actas</center></h2>
          <img src={LogoUSM} height={100} alt='logo usm' /><br />
          <Button variant='contained'>Material UI Button</Button>
        </div>
      );
  }
}


export default Actas
