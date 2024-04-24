import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="container">
        <h1>KEC - Page Not Found</h1>
        <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
        <p>Go back to <Link to="/">homepage</Link></p>
    </div>
  )
}

export default PageNotFound