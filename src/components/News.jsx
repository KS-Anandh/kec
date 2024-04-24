import React, { useState } from 'react'

const News = (props) => {
    var status=props.end==="false";
    var summary=props.summary;
    var [length,setLength]=useState(false);
    function change(){
      setLength(!length)
    }
  return (
    <div>
        <h3 style={{color:'blue'}}>{props.title}</h3>
        {length? <p >{summary}</p>:<p >{summary.substring(0,110)}...</p>}
        { length?<button onClick={change}className='length_button'>less</button>:<button onClick={change} className='length_button'>More</button> }
        { status?<p>-----------------------------------------------</p>:<br/>}  
    </div>
  )
}

export default News