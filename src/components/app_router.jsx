import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Actas from '../pages/actas'
import HomeReuniones from '../pages/homeReuniones'
import Agenda from '../pages/agenda'
import AgendaFinal from '../pages/agendaFinal'
import Compromisos from '../pages/compromisos'
import CrearEvento from '../pages/crearEvento'
import CrearEventoFinal from '../pages/crearEventoFinal'
import CrearReunion from '../pages/crearReunion'
import Participantes from '../pages/participantes'
import ParticipantesNuevo from '../pages/participantesNuevo'
import Reunion from '../pages/reunion'
import ReunionCreada from '../pages/reunionCreada'
import ReunionFinalizada from '../pages/reunionFinalizada'
import RevisarEvento from '../pages/revisarEvento'
import Unirse from '../pages/unirseReunion'
import NuevoCompromiso from '../pages/nuevoCompromiso'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/actas' element={<Actas />} />
        <Route path='/homeReuniones' element={<HomeReuniones />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/agendaFinal' element={<AgendaFinal />} />
        <Route path='/compromisos' element={<Compromisos />} />
        <Route path='/crearEvento' element={<CrearEvento />} />
        <Route path='/crearEventoFinal' element={<CrearEventoFinal />} />
        <Route path='/crearReunion' element={<CrearReunion />} />
        <Route path='/participantes' element={<Participantes />} />
        <Route path='/participantesNuevo' element={<ParticipantesNuevo />} />
        <Route path='/reunion' element={<Reunion />} />
        <Route path='/reunionCreada' element={<ReunionCreada />} />
        <Route path='/reunionFinalizada' element={<ReunionFinalizada />} />
        <Route path='/revisarEvento' element={<RevisarEvento />} />
        <Route path='/unirseReunion' element={<Unirse />} />
        <Route path='/nuevoCompromiso' element={<NuevoCompromiso />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
