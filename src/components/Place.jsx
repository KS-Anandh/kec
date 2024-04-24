import React from 'react'

const Place = (props) => {
  return (
    <div className='place'>
      <div>
        <h3>Comapany : <span className="company">{props.company }</span> Pacakge : {props.package }</h3>
        <h4>Name:<span className="name">{props.name }</span> </h4>
        <h4>Branch: {props.branch }</h4>
        <h4>Year: {props.year }</h4>
        </div>
        <div className="img">
          <img src={props.img} width="200px" height="100px"/>
        </div>
    </div>
  )
}

export default Place