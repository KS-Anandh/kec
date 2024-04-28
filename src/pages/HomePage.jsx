import React from 'react'
import Article from '../components/Article'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

function HomePage({setMail}) {
  const {id}=useParams();
  setMail(id);
  return (
    <>
    <Article />
    <Footer/>
    </>
  )
}

export default HomePage