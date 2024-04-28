import React, { useState } from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider ,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AboutPage from './pages/AboutPage'
import PlacementsPage from './pages/PlacementsPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  const [mail,setMail]=useState(null);
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/kec" element={<MainLayout mail={mail}/>}>
          {/* <Route index element={<HomePage setMail={setMail}/>}/> */}
          <Route path="/kec/:id" element={<HomePage setMail={setMail}/> } />
          <Route path="/kec/placements" element={<PlacementsPage/>}/>
          <Route path="/kec/about" element={<AboutPage/>}/>
          <Route index path="/kec" element={<LoginPage/>} />
          <Route path="/kec/registartion" element={<RegistrationPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
   
  )
}
export default App