import React from 'react'
import { useParams} from 'react-router-dom'

const RecipeDetails = () => {
  const params = useParams()

  console.log(params)
  return (
    <div>
      <h1>RecipeDetails Page</h1>
      <p>{params.id}</p>
    </div>
  )
}

export default RecipeDetails
