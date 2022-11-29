import React, { Component} from 'react'
import Cabecera from '../components/Cabecera'
import Stack from '@mui/material/Stack';
import green from '../assets/green.png'
import { Button } from '@mui/material'
import NavBar from '../components/nav_bar'


class Agenda extends Component {
  render() {
    return(
      <div className='page'>
      <Cabecera />
      <NavBar />
      <h2><center>Diciembre</center></h2>
      <br></br>
      <center>
        <table border={1} cellPadding={15}>
          <thead>
            <tr>
              <th>Lunes&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Martes&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Miércoles&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Jueves&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Viernes&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Sábado&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Domingo&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>1&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>2&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>3&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>4&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>5&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>6&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
          <tr>
              <th>7&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>8&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>9&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>10 &nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>11&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;12 &nbsp; 
              <a href="http://localhost:5050/revisarEvento" onClick='http://localhost:5050/revisarEvento'>
                  <img width="15" height="15" src={green} alt="greendot"/>
                  </a>
                </th>
              <th>13&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
          <tr>
              <th>14&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>15&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>16&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;17 &nbsp;
              <img width="15" height="15" src={green} alt="greendot"/>    
              </th>
              <th>18&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>19&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>20&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
          <tr>
              <th>21&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>22&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>23&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>24&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>25&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>26&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>27&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
          <tr>
              <th>28&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>29&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>30&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </tbody>
      </table>
    </center>
      <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
        <a href='http://localhost:5050/crearEvento'><Button variant="contained" color="success"  onClick='http://localhost:5050/crearEvento'>  Agendar Reunión </Button></a>
        </Stack>
    </div>
    );
  }
}

export default Agenda