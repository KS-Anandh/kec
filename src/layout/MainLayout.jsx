import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = ({mail}) => {
  return (
    <>
    <NavBar mail={mail}/>
    <Outlet/>
    </>
  )
}

export default MainLayout