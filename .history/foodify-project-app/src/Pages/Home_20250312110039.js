import React from 'react'
import './Home.css';
import RecipeLists from './RecipeLists';
import Searchbox from '../components/Searchbox';
import



const Home = () => {
  return (
    <>
    <Searchbox />
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
