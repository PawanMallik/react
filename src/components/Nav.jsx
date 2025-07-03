import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    
  return (
    <nav >
        <Link to='/'>Home</Link>
        <Link to='/image'>Image</Link>
        <Link to='/jokes'>Jokes</Link>
        <Link to='/music'>Music</Link>
        <Link to='/zipcode'>ZipCode</Link>
        <Link to='/array'>Array</Link>
    </nav>
  )
}

export default Nav