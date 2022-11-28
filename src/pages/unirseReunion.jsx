import React, { Component} from 'react'
import Box from '@mui/material/Box'; // llenado
import TextField from '@mui/material/TextField'; // llenado
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'

import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'


class CrearReunion extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2><center>Unirse a Reunión</center></h2>
        <center><Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  {/* llenado */}
          <TextField id="outlined-basic" label="Link de la reunión" variant="outlined" />   {/* llenado */}
        </Box> </center> {/* llenado */}
        <center><Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  
          <TextField id="outlined-basic" label="Contraseña (opcional)" variant="outlined" /> 
        </Box> </center> 
        <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
          <a href='http://localhost:5050/reunion'><Button variant="contained" color="success"  onClick='http://localhost:5050/reunion'>  Ingresar </Button></a>
          <a href='http://localhost:5050/homeReuniones'><Button variant="contained" color="success"  onClick='http://localhost:5050/homeReuniones'>  Cancelar </Button></a>
        </Stack>
      </div>
      );
  }
}

export default CrearReunion