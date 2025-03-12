import React from 'react'
import './Home.css';
import T
import RecipeLists from './RecipeLists';



const Home = () => {
  return (
    <>
    <div className='menu-options'>
      <ul>
        <li>All</li>
        <li>BreakFast</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ul>   
    </div>
    <RecipeLists />
   </> 
  )
}

export default Home
