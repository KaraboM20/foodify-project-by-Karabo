import React from 'react'
import { Link } from 'react-router-dom'

const RecipeLists = () => {
  return (
    <div>
      <h1>RecipeLists Page</h1>
      <ul>
        <li><Link to='/recipelists/01'>Recipe 1</Link></li>
        <li>Recipe 2</li>
        <li>Recipe 3</li>
      </ul>
    </div>
  )
}

export default RecipeLists
