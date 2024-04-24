import React from 'react'
import Place from '../components/Place'
import Footer from '../components/Footer'
import data from '../kec.json'
const PlacementsPage = () => {
     var places=data.kec;
    
  return (
    <>
    <center>-----------<h2>Our Proud </h2>-----------</center>
    <div className="places">
      {places.map((data)=> <Place company={data.Comapny} package={data.package} name={data.name} branch={data.branch} year={data.year} img={data.img}/>)}
    </div>
      <Footer/>
      </>
  )
}
export default PlacementsPage