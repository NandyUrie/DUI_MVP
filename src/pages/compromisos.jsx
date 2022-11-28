import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'
import editicon from '../assets/editicon.png'
import NavBar from '../components/nav_bar'
import { Button } from '@mui/material'
import flechablanca from '../assets/flechablanca.png'
import flechanegra from '../assets/flechanegra.png'
import icon_back_arrow from '../assets/icon_back_arrow.png'


class Compromisos extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2><center>Lista de Compromisos</center></h2>
          <center>
            <table>
              <tbody>
                <tr>
                  <th> Scrum semanal</th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td >12 de diciembre</td>
                  <td>10:00 </td>
                  <td>hrs</td>
                </tr>
              </tbody>
            </table>
          </center>
        <br></br>

        <center>
          <table border={1} cellPadding={15}>
            <thead>
              <tr>
                <th>Editar</th>
                <th>N°  &nbsp; <img src={flechanegra} width="15" height="15"></img></th>
                <th>Compromiso &nbsp; <img src={flechablanca} width="15" height="15"></img></th>
                <th>Adjudicado a &nbsp; <img src={flechablanca} width="15" height="15"></img></th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td><button><img src={editicon} width="25" height="25"></img></button></td>
              <td>1</td>
              <td>Mejorar interfaz</td>
              <td>Equipo de software</td>
            </tr>
            <tr>
              <td><button><img src={editicon} width="25" height="25"></img></button></td>
              <td>2</td>
              <td>Cambio de colores</td>
              <td>Equipo de software</td>
            </tr>
            <tr>
              <td><button><img src={editicon} width="25" height="25"></img></button></td>
              <td>3</td>
              <td>Mejorar rendimiento</td>
              <td>Equipo de desarrollo</td>
            </tr>
            <tr>
              <td><button><img src={editicon} width="25" height="25"></img></button></td>
              <td>4</td>
              <td>Acción de compromiso</td>
              <td>Equipo X</td>
            </tr>
            <tr>
              <td><button><img src={editicon} width="25" height="25"></img></button></td>
              <td>5</td>
              <td>Otra acción</td>
              <td>Equipo Y</td>
            </tr>
            <tr>
              <td><button><img src={editicon} width="25" height="25"></img></button></td>
              <td>6</td>
              <td>Otra acción</td>
              <td>Equipo Z</td>
            </tr>
          </tbody>
        </table>
        <div align="right">
            <a href='http://localhost:5050/compromisos'><Button variant="contained" color="success"  onClick='http://localhost:5050/compromisos'> + Crear nuevo compromiso </Button></a>
        </div>
        <div align="left">
            <a href='http://localhost:5050/revisarEvento'><button onClick='http://localhost:5050/revisarEvento'><img src={icon_back_arrow} width="15" height="15"></img> Volver </button></a>
        </div>
      </center>
      </div>
      );
  }
}

export default Compromisos