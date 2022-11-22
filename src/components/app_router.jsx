import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/homeReuniones'
import InternalPage from '../pages/actas'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
