import React, { Component} from 'react'
import logo from '../assets/logo.png'

export default class Cabecera extends Component{

    render(){
        return (
            <header className='App-header'>
                <a href='http://localhost:5050/home'><img src={logo} className='App-logo' alt='logo' onClick='http://localhost:5050/home'/></a>
            </header>
        )
    }
}