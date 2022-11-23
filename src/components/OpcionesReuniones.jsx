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
                        <img src={fotoagenda} alt="Italian Trulli"/>
                        <p>buena diego</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
