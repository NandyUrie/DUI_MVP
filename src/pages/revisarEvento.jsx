import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'
import { Button } from '@mui/material'
import NavBar from '../components/nav_bar'
import icon_back_arrow from '../assets/icon_back_arrow.png'


class RevisarEvento extends Component {
  render() {
      return(
        <div className='page'>
          <Cabecera />
          <NavBar />
          <h2><center>12 de diciembre</center></h2>
          <div>
          <center>
          <table cellpadding={10}>
          <tr>
            <td valign="right"><right> Nombre de la reunión: </right></td>
            <td valign="left">Scrum semanal </td>
          </tr>
          <tr>
            <td valign="right"><right> Horario: </right></td>
            <td valign="left"> 10:00 am </td>
          </tr>
          <tr>
            <td valign="right"><right> Participantes: </right></td>
            <td valign="left"> 7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='http://localhost:5050/participantes'><button onClick='http://localhost:5050/participantes'> Ver Participantes </button></a></td>
          </tr>
          <tr>
            <td valign="right"><right> Descripción: </right></td>
            <td valign="left">Reunión para revisar avances del proyecto.</td>
          </tr>
        </table>
        <table cellpadding={15}>
          <center>
          <tr>
            <td><a href='http://localhost:5050/compromisos'><Button variant="contained" color="success"  onClick='http://localhost:5050/compromisos'> Ver lista de compromisos </Button></a></td>
            <td><a href='http://localhost:5050/revisarEvento'><Button variant="contained" color="success"  onClick='http://localhost:5050/revisarEvento'> Editar reunión</Button></a></td>
          </tr>
          <tr>
            <td><a href='http://localhost:5050/revisarEvento'><Button variant="contained" color="success"  onClick='http://localhost:5050/revisarEvento'> Enviar recordatorio </Button></a></td>
            <td><a href='http://localhost:5050/agenda'><Button variant="contained" color="success"  onClick='http://localhost:5050/agenda'> Eliminar reunión </Button></a></td>
          </tr>
          </center>
        </table>
        </center>
          </div>
        <div align="left">
          <a href='http://localhost:5050/agenda'><button onClick='http://localhost:5050/agenda'><img src={icon_back_arrow} width="15" height="15"></img> Volver </button></a>
        </div>
      </div>
      );
  }
}

export default RevisarEvento