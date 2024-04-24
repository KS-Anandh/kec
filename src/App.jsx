import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import AboutPage from './pages/AboutPage'
import PlacementsPage from './pages/PlacementsPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter } from 'react-router-dom'
const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/placements" element={<PlacementsPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/registartion" element={<RegistrationPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
  </Route>
))
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App