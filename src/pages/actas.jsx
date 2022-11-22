import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

//NavBar -> Se crea automáticamente con lo que le pongamos


export const Actas = () => {
  return (
    <div className='page'>
      <Cabecera />
      <NavBar />  
      <h2><center>Actas</center></h2>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>

  )
}

export default Actas
