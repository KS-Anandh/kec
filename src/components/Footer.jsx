import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaHandPointRight,FaLocationArrow} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className="row">
            <div className='col1'>
                <h4>Contact Us</h4>
                <address>
                   <FaLocationArrow/> Kuppam Enginnering College<br/>
                    Kuppam, Andhra pradhesh , 517401<br/>
                    <abbr title="Phone">P:</abbr>(+91) 9676906525<br/>
                    <abbr title="Email">E:</abbr> <a href="mailto:principal@kec.ac.in">principal@kec.ac.in</a>
                </address>
            </div>
            <div className="col2">
                <h4>Quick Links</h4>
                <ul className="list">
                    <li><FaHandPointRight/> Admissions</li>
                    <li><FaHandPointRight/> Academics</li>
                    <li><FaHandPointRight/> Campus Life</li>
                    <li><FaHandPointRight/> About Us</li>
                    <li><FaHandPointRight/> Contact</li>
                </ul>
            </div>
            <div className="col3">
                <h4>Connect With Us</h4>
                <ul className="list">
                    <li><FaFacebook/> Faceboox</li>
                    <li><FaTwitter/> twitter</li>
                    <li><FaInstagram/> instagram</li>
                    <li><FaLinkedin/> linkedin</li>
                </ul>
            </div>
        </div>
        <h3 className='copy'>&copy; 2024 Your College. All Rights Reserved. | Designed by Kuppam Enginneering College </h3>
    </div>

    </>
  )
}

export default Footer