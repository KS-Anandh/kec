import React from 'react'
import logo from '../assets/images/logo.png'
import naac from '../assets/images/NAAC.png'
import { FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../assets/images/logo.png'
const NavBar = ({mail}) => {
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
            <li><Link to={`/kec/ ${mail!=null?mail:""}`}>Home</Link></li>
            <li><Link to="/kec/placements">placements</Link></li>
            <li><Link to="/kec/about">About</Link></li>
            {
              mail!=null?<><img src={img} width='30px' height='30px' style={{marginRight:"10px"}}/><li style={{backgroundColor:"green",color:'white'}}>{mail.length>8?mail.slice(0,10):mail}</li></>:<li><Link to="/kec/login">Login</Link></li>
            } 
          </ul>
    </div>
  )
}

export default NavBar