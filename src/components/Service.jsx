import React from 'react'

const Service = (props) => {
  return (
    <div className='service'> 
           <h3>{props.service}</h3>
           <img src={props.img} className='service_img' alter="img" />
           <p>{props.info}</p>
           <a href={props.link}>Click For More..</a>
    </div>
  )
}
export default Service