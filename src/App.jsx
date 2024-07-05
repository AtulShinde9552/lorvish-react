import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Careers from './pages/careers'
import Contact from './pages/contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './compoents/Header'



const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App