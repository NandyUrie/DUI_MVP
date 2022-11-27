import React, { Component} from 'react'
import Box from '@mui/material/Box'; // llenado
import TextField from '@mui/material/TextField'; // llenado
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';

import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'


class ReunionCreada extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2><center>Reunion Creada</center></h2>
        <center>
          <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off"  >
              <TextField disabled id="outlined-disabled" label="Link de la reunión" defaultValue="http://localhost:5050/reunion"/>
            </Box>
            <Button variant="contained" color="success" >  Copiar Link </Button>
          </Stack>
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
              <Checkbox defaultChecked color="success" />
              <p>Grabar audio de la reunión</p>
            </Stack>
            <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
              <Checkbox defaultChecked color="success" />
              <p>Generar acta automática</p>
            </Stack>
            <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
              <Checkbox defaultChecked color="success" />
              <p>Ingresar con micrófono activado</p>
            </Stack>
          </Box>
          <a href='http://localhost:5050/reunion'><Button variant="contained" color="success"  onClick='http://localhost:5050/reunion'>  Continuar </Button></a>
        </center>
      </div>
      );
  }
}

export default ReunionCreada