import React, { Component} from 'react'
import Stack from '@mui/material/Stack';

import fotoagenda from '../assets/homeAgenda.png'
import fotomas from '../assets/homeMas.png'
import fotomesa from '../assets/homeMesa.png'

export default class Opciones extends Component{
    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    <a href="http://localhost:5050/crearReunion" onClick='http://localhost:5050/crearReunion'>
                        <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
                            <img src={fotomesa} alt="Fotomesa"/>
                            <p>Crear nueva reunión</p>
                        </Stack>
                    </a>    
                    </div>
                    <div>
                    <a href="">
                        <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
                            <img src={fotomas} alt="fotomas"/>
                            <p>Unirse a una reunión</p>
                        </Stack>
                    </a>
                    </div>
                    <div>
                    <a href="http://localhost:5050/agenda" onClick='http://localhost:5050/agenda'>
                        <Stack direction="row" justifyContent="center"  alignItems="center" spacing={2}>
                            <img src={fotoagenda} alt="fotoagenda"/>
                            <p>Agenda de reuniones</p>
                        </Stack>
                    </a>
                    </div>
                </div>
                
            </div>
        )
    }
}
