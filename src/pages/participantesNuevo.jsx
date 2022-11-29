import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import icono1 from '../assets/icono1.png'
import icono2 from '../assets/icono2.png'
import icono3 from '../assets/icono3.png'
import icono4 from '../assets/icono4.png'
import icono5 from '../assets/icono5.png'
import icono6 from '../assets/icono6.png'
import icono7 from '../assets/icono7.png'
import icono11 from '../assets/icono11.png'
import icono12 from '../assets/icono12.png'
import icono10 from '../assets/icono10.png'
import icon_back_arrow from '../assets/icon_back_arrow.png'




class Participantes extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <h2><center>Participantes</center></h2>

        
        <center>
          <p>12 de diciembre 2022</p>
          <table border="1">
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono1} width="85" height="85"></img></td>
              <td>Tú (Iván Castillo)</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono7} width="85" height="85"></img></td>
              <td>Valentina Aróstica</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono5} width="85" height="85"></img></td>
              <td>Diego Rosales</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono10} width="92" height="85"></img></td>
              <td>Fabián Saso</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono3} width="85" height="85"></img></td>
              <td>Nandy Troncoso</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono6} width="85" height="85"></img></td>
              <td>Adrián Barrios</td>
            </tr>
            <tr>
              <td><Checkbox  color="success" /></td>
              <td><img src={icono12} width="85" height="85"></img></td>
              <td>Tolueno Zapata</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono2} width="85" height="85"></img></td>
              <td>Alonso Hernandez</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono11} width="85" height="85"></img></td>
              <td>Francisco Manriquez</td>
            </tr>
            <tr>
              <td><Checkbox color="success" /></td>
              <td><img src={icono4} width="85" height="85"></img></td>
              <td>Joaquín Gatica</td>
            </tr>
          </table>
        </center>
        <div align="right">
            <a href='http://localhost:5050/crearEventoFinal'><Button variant="contained" color="success" onClick='http://localhost:5050/crearEventoFinal'> Guardar </Button></a>
        </div>
        <div align="left">
            <a href='http://localhost:5050/crearEventoFinal'><button onClick='http://localhost:5050/crearEventoFinal'><img src={icon_back_arrow} width="15" height="15"></img> Volver </button></a>
        </div>

      </div>
      );
  }
}

export default Participantes