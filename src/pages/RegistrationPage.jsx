import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

const RegistrationPage = () => {
   const [reg,setReg]=useState();
   const [mail,setMail]=useState();
   const[password,setPassword]=useState();
   const [valid,setValid]=useState(false);
  
   function validate(){
    if(reg!=null){
      setValid(true);
    }
   }
  return (
    <>
    <div className="container">
    <div className="login-page">
         {
          valid?<center>Submitted Successfully</center>:""
         }
        <div className="title">
            <h2>Student Registration</h2>
       </div>
       <form className="form" action='/' >
        <label> Enter Your Reg-no:</label>
        <input type="text" onChange={(data)=>{
          setReg(data.target.value)
        }} placeholder=" Enter the mail "required/>
        <label> Enter Your Mail:</label>
        <input type="text" onChange={(data)=>{
          setMail(data.target.value)
        }} placeholder=" Enter the mail "required/>
        <label> Enter Your Mail:</label>
        <input type="password" onChange={(data)=>{
          setPassword(data.target.value)
        }} placeholder=" Enter the Password"required/>
        <p style={{color:'rgb(219, 43, 43)',fontWeight:'600',cursor: 'pointer'}}>Forget Pasword</p>
        <p> If incase your already visited means please Sign-in with same Your mail and password</p>
        <input type="submit" onClick={validate} value="Sign-up"/>
       </form>
        <form className="form1" action="login"><Link to="/login" >Sign-in</Link></form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default RegistrationPage