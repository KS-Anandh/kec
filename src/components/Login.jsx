import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
        
  const [mail,setMail]=useState();
  const [Password,setPassword]=useState();
  const [valid,setValid]=useState(false);
  function validate(){
       if(mail!=null && Password !=null ){
        setValid(true)
       }
  }
  return (
    <div className="container">
    <div className="login-page">
      {
        valid ? <center>Submitted Successfully</center>:" "
      }
        <div className="title">
       <h2 >Student Login</h2>
        </div>
       <form className="form" action='/'>
        <label> Enter Your Mail:</label>
        <input type="text" onChange={(data)=>{
              setMail(data.target.value)
        }} placeholder=" Enter the mail "required/>
        <label> Enter Your Password:</label>
        <input type="password" onChange={(data)=>{
          setPassword(data.target.value)
        }} placeholder=" Enter the Password"required />
        <p style={{color:'rgb(219, 43, 43)',fontWeight:'600',cursor: 'pointer'}}>Forget Pasword</p>
        <p> If incase your first time visited means please Sign-up with Your Id then Sign-in </p>
        <input type="submit"  onClick={validate} value="Sign-in"/>
       </form>
        <form className="form1"><Link to="/registartion">Sing-Up</Link></form>
    </div>
    </div>
  )
}

export default Login