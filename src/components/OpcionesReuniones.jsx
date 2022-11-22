import React, { Component} from 'react'
import fotoagenda from '../assets/homeAgenda.png'
import fotomas from '../assets/homeMas.png'
import fotomesa from '../assets/homeMesa.png'

export default class Opciones extends Component{
    render(){
        return (
            <div>
                 <img src={fotomesa} height={100} alt='logo usm' /><br />
                <img src={fotomas} height={100} alt='logo usm' /><br />
                <img src={fotoagenda} height={100} alt='logo usm' /><br />
            </div>
        )
    }
}