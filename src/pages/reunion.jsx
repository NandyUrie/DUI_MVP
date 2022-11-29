import React, { Component} from 'react'
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

import Cabecera from '../components/Cabecera'
import NavBar from '../components/nav_bar'

import grabando from '../assets/rec.png'
import usuario1 from '../assets/icono1.png'
import usuario2 from '../assets/icono2.png'
import usuario3 from '../assets/icono3.png'
import usuario4 from '../assets/icono4.png'
import usuario5 from '../assets/icono5.png'
import usuario6 from '../assets/icono6.png'
import usuario7 from '../assets/icono7.png'
import usuario8 from '../assets/icono8.png'
import usuario9 from '../assets/icono9.png'
import usuario10 from '../assets/icono10.png'
import usuario11 from '../assets/icono11.png'
import usuario12 from '../assets/icono12.png'
import usuario13 from '../assets/icono13.png'

import microfono from '../assets/microf.png'
import chat from '../assets/chat.png'
import compartirPantalla from '../assets/compPant.png'

class Reunion extends Component {
  render() {
      return(
        <div className='page'>
        <Cabecera />
        <NavBar />
        <Stack direction="row"  spacing={137}>
          <h2 align="left">Reunión en curso</h2>
          <img src={grabando} className='App-logo ' align="right" alt='grabando' width="100" height="70"/>
        </Stack>
        <div class = 'fondonegro' >
          <Stack direction="row" alignItems="left" spacing={25}>
            <img src={usuario1} className='App-logo ' alt='usuario' hspace='20' width="180" height="180"/>
            <img src={usuario2} className='App-logo ' alt='usuario'  width="180" height="180"/>
            <img src={usuario4} className='App-logo ' alt='usuario'  width="180" height="180"/>
            <img src={usuario3} className='App-logo ' alt='usuario'  width="180" height="180"/>
          </Stack>
          <Stack direction="row" alignItems="left" spacing={25}>
            <img src={usuario5} className='App-logo ' alt='usuario' hspace='20' width="180" height="180"/>
            <img src={usuario6} className='App-logo ' alt='usuario' width="180" height="180"/>
            <img src={usuario7} className='App-logo ' alt='usuario' width="180" height="180"/>
            <img src={usuario8} className='App-logo ' alt='usuario' width="180" height="180"/>
          </Stack>
          <Stack direction="row" alignItems="left" spacing={25}>
            <img src={usuario10} className='App-logo ' alt='usuario' hspace='20' width="180" height="180"/>
            <img src={usuario9} className='App-logo ' alt='usuario' width="180" height="180"/>
            <img src={usuario11} className='App-logo ' alt='usuario' width="180" height="180"/>
            <img src={usuario12} className='App-logo ' alt='usuario' width="180" height="180"/>
          </Stack>
          <Stack direction="row" alignItems="left" spacing={2}>
            <img src={usuario13} className='App-logo ' alt='usuario' hspace='20' width="180" height="180"/>
          </Stack>
        </div>
        <Stack direction="row" alignItems="left" spacing={35}>
            <img src={microfono} className='App-logo ' alt='microfono' hspace='50' width="50" height="80"/>
            <img src={chat} className='App-logo ' alt='chat'  width="80" height="80"/>
            <img src={compartirPantalla} className='App-logo ' alt='compartirPantalla'  width="100" height="70"/>
            <a href='http://localhost:5050/reunionFinalizada'><Button variant="contained" color="success" onClick='http://localhost:5050/reunionFinalizada' size="large">  Finalizar Reunión </Button></a>
        </Stack>
      </div>
      );
  }
}

export default Reunion