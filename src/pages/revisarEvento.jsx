import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'
import { Button } from '@mui/material'
import NavBar from '../components/nav_bar'


class RevisarEvento extends Component {
  render() {
      return(
        <div className='page'>
          <Cabecera />
          <NavBar />
          <h2><center>12 de Noviembre</center></h2>
          <div>
          <center>
          <table cellpadding={15}>
          <tr>
            <right><td> Nombre de la reunión:</td></right>
            <td><center> Scrum semanal </center></td>
            <td><button>Editar</button></td>
          </tr>
          <tr>
            <right><td> Horario:  </td></right>
            <td> <center>10:00 am</center> </td>
            <td><button>Editar</button></td>
          </tr>
          <tr>
          <right><td> Participantes:   </td></right>
            <td> <center>7 </center> </td>
            <td><button>Ver Participantes</button></td>
          </tr>
          <tr>
            <right><td> Descripción:  </td></right> 
            <td> <center>Reunión para revisar avances del proyecto. </center> </td>
            <td><button>Editar</button></td>
          </tr>
        </table>
        <table cellpadding={20}>
          <center>
          <tr>
            <td><a href='http://localhost:5050/compromisos'><Button variant="contained" color="success"  onClick='http://localhost:5050/compromisos'> Ver lista de compromisos </Button></a></td>
            <td><a href='http://localhost:5050/revisarEvento'><Button variant="contained" color="success"  onClick='http://localhost:5050/revisarEvento'> Editar reunión</Button></a></td>
          </tr>
          <tr>
            <td><a href='http://localhost:5050/revisarEvento'><Button variant="contained" color="success"  onClick='http://localhost:5050/revisarEvento'> Enviar recordatorio </Button></a></td>
            <td><a href='http://localhost:5050/revisarEvento'><Button variant="contained" color="success"  onClick='http://localhost:5050/revisarEvento'> Eliminar reunión </Button></a></td>
          </tr>
          </center>
        </table>
        </center>
          </div>
      </div>
      );
  }
}

export default RevisarEvento