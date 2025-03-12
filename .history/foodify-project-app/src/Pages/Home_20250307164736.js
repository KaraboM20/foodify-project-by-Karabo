import React from 'react'
import './Home.css';
import Trendingrecipes from '../components/Trendingrecipes';
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

    <Trendingrecipes />
    <RecipeLists />
   </> 
  )
}

export default Home
