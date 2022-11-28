import React, { Component} from 'react'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack';

import Cabecera from '../components/Cabecera'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'
import pdf from '../assets/iconPDF.png'

class Actas extends Component {
  render() {
      return(
        <div className='page'>
          <Cabecera />
          <NavBar /> 
          <center><h2>Actas</h2></center>
          <center>
            <div>
              <center>
                <table cellSpacing={25}>
                  <tr>
                    <td>12/12/2022</td>
                    <td><img src={pdf} className='App-logo fotorec' alt='pdf' width="50" height="55"/></td>
                    <td><p>Scrum semanal</p></td>
                    <td><Button variant="contained" color="success" >  Descargar </Button></td>
                  </tr>
                  <tr>
                    <td>28/11/2022</td>
                    <td><img src={pdf} className='App-logo fotorec' alt='pdf' width="50" height="55"/></td>
                    <td><p>Acta nombre reunión</p></td>
                    <td><Button variant="contained" color="success" >  Descargar </Button></td>
                  </tr>
                  <tr>
                    <td>20/09/2022</td>
                    <td><img src={pdf} className='App-logo fotorec' alt='pdf' width="50" height="55"/></td>
                    <td><p>Acta nombre reunión</p></td>
                    <td><Button variant="contained" color="success" >  Descargar </Button></td>
                  </tr>
                  <tr>
                    <td>21/06/2022</td>
                    <td><img src={pdf} className='App-logo fotorec' alt='pdf' width="50" height="55"/></td>
                    <td><p>Acta primera reunión del año</p></td>
                    <td><Button variant="contained" color="success" >  Descargar </Button></td>
                  </tr>
                </table>
              </center>
            </div>
          </center>
        </div>
      );
  }
}


export default Actas
