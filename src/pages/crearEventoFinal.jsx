import React, { Component} from 'react'
import Box from '@mui/material/Box'; // llenado
import TextField from '@mui/material/TextField'; // llenado
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'
import Cabecera from '../components/Cabecera'
import NavBar from '../components/nav_bar'


class CrearEvento extends Component {
  render() {
      return(
        <div className='page'>
          <Cabecera />
          <NavBar />
          <h2><center>Agendar Reunión</center></h2>
          <div>
          <center>
          <table cellpadding={15}>
          <tr>
            <Stack>
            <center><Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  {/* llenado */}
            <TextField id="outlined-basic" defaultValue="Scrum" label="Nombre de la reunión" variant="outlined" />   {/* llenado */}
            </Box> </center> {/* llenado */}
            </Stack>
          </tr>
          <tr>
            <Stack>
            <center><Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  {/* llenado */}
            <TextField id="outlined-basic" defaultValue="17/12/2022" label="Fecha - Dia/Mes/Año" variant="outlined" />   {/* llenado */}
            </Box> </center> {/* llenado */}
            </Stack>
          </tr>
          <tr>
            <Stack>
            <center><Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  {/* llenado */}
            <TextField id="outlined-basic" label="Descripción (opcional)" variant="outlined" />   {/* llenado */}
            </Box> </center> {/* llenado */}
            </Stack>
          </tr>
          <tr>
            <Stack>
            <center><Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  {/* llenado */}
            <TextField id="outlined-basic" defaultValue="10:00" label="Horario" labelcolor="000000" variant="outlined" />   {/* llenado */}
            </Box> </center> {/* llenado */}
            </Stack>
          </tr>
          <Stack>
          <a href='http://localhost:5050/participantesNuevo'><Button variant="contained" color="success"  onClick='http://localhost:5050/participantesNuevo'>  Participantes </Button></a>
          <td>Participantes: 2</td>
          </Stack>
          <Stack direction="row" justifyContent="center"  alignItems="center" spacing={5}>
          <a href='http://localhost:5050/agendaFinal'><Button variant="contained" color="success"  onClick='http://localhost:5050/agendaFinal'>  Agendar </Button></a>
          <a href='http://localhost:5050/agenda'><Button variant="contained" color="success"  onClick='http://localhost:5050/agenda'>  Cancelar </Button></a>
        </Stack>
        </table>
        </center>
          </div>
      </div>
      );
  }
}

export default CrearEvento