import React from 'react'
import { Link } from 'react-router-dom'

const RecipeLists = () => {
  return (
    <div>
      <h1>RecipeLists Page</h1>
      <ul>
        <li><Link to='/recipelists/01'>Recipe 1</Link></li>
        <li><Link to='/recipelists/01'>Recipe 1</Link></li>
        
      </ul>
    </div>
  )
}

export default RecipeLists
