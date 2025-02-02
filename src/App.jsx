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
import ERP from './pages/ERP'
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

      <Route path='/lorvishOffers' element={<LorvishOffers/>}/>
      <Route path='/managedservice' element={<ManagedService/>}/>
      <Route path='/erp' element={<ERP/>}/>
      <Route path='/Itstaffing' element={<ITSTaffing/>}/>
      <Route path='/projectoutsourcing' element={<ProjectOutsourcing/>}/>
     
    </Routes>
    </BrowserRouter>
  )
}

export default App