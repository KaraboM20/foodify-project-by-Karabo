import React from 'react'
import {Link} from 'react-router-dom'
import './CartsPage.css'

const Carts = () => {
  return (
    <div>
      <h3>Carts Page</h3>
      <Link to='./home'><h3>Home</h3></Link>
      
    </div>
  )
}

export default Carts
