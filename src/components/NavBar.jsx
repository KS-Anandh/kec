import React from 'react'
import logo from '../assets/images/logo.png'
import naac from '../assets/images/NAAC.png'
import { FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='logo' >
            <img className='img1' src={logo}/>
        <div>
           <h2>Kuppam Engineering College</h2> 
           <p><FaLocationArrow/>KES Nagar, Kuppam
            Chittoor Dist, AP 517425.</p>     
        </div>
        <img className='img2' src={naac} />
        </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="placements">placements</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="login">Login</Link></li>
          </ul>
    </div>
  )
}

export default NavBar