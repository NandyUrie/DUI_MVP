import React, { Component} from 'react'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack';

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
        <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
          <a href='http://localhost:5050/actas'><Button variant="contained" color="success"  onClick='http://localhost:5050/actas'>  Ver Acta </Button></a>
          <a href='http://localhost:5050/'><Button variant="contained" color="success"  onClick='http://localhost:5050/'>  Salir </Button></a>
        </Stack>
      </div>
      );
  }
}

export default ReunionFinalizada