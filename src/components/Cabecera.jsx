import React, { Component} from 'react'
import logo from '../assets/logo.png'

export default class Cabecera extends Component{

    render(){
        return (
            <header className='App-header logoprincipal'>
                <a href='http://localhost:5050/'><img src={logo} className='App-logo logoprincipal' alt='logoprincipal' onClick='http://localhost:5050/'/></a>
            </header>
        )
    }
}