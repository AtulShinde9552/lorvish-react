import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Careers from './pages/careers'
import Contact from './pages/contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './compoents/Header'
import LorvishOffers from './pages/servicepages/LorvishOffers'
import ManagedService from './pages/servicepages/ManagedService'
import ERP from './pages/servicepages/ERP'
import ITSTaffing from './pages/servicepages/ITSTaffing'
import ProjectOutsourcing from './pages/servicepages/ProjectOutsourcing'



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

      <Route path='/services/lorvishOffers' element={<LorvishOffers/>}/>
      <Route path='/services/managedservice' element={<ManagedService/>}/>
      <Route path='/services/ERP' element={<ERP/>}/>
      <Route path='/services/Itstaffing' element={<ITSTaffing/>}/>
      <Route path='/services/projectoutsourcing' element={<ProjectOutsourcing/>}/>
     
    </Routes>
    </BrowserRouter>
  )
}

export default App