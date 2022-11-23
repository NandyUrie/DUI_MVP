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
          <Button variant="contained" color="success">  Ver Acta </Button>
          <Button variant="contained" color="success">  Salir </Button>
        </Stack>
      </div>
      );
  }
}

export default ReunionFinalizada