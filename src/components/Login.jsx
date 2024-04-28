import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
        const [mail,setMail]=useState(null);
  return (
    <div className="container">
    <div className="login-page">
        <div className="title">
       <h2 >Student Login</h2>
        </div>
       <form className="form">
        <label> Enter Your Mail:</label>
        <input type="text" onChange={(data)=>{
              setMail(data.target.value)
        }} placeholder=" Enter the mail "required/>
        <label> Enter Your Password:</label>
        <input type="password" placeholder=" Enter the Password"required />
        <p style={{color:'rgb(219, 43, 43)',fontWeight:'600',cursor: 'pointer'}}>Forget Pasword</p>
        <p> If incase your first time visited means please Sign-up with Your Id then Sign-in </p>
        <Link to={`/kec/${mail}`}>Login</Link>
       </form>
        <form className="form1"><Link to="/registartion">Sing-Up</Link></form>
    </div>
    </div>
  )
}

export default Login