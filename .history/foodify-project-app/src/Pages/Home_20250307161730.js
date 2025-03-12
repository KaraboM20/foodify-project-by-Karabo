import React from 'react'
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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

    <div className='trending-recipes'>
      <img src='https://assets.unileversolutions.com/recipes-v2/241556.png?im=Resize,height=580;Crop,size=(632,580),gravity=Center' />
      <img src='https://assets.unileversolutions.com/recipes-v2/240806.png?im=Resize,height=320;Crop,size=(555,320),gravity=Center' />
      <img src='https://assets.unileversolutions.com/recipes-v2/238269.jpg?im=Resize,height=580;Crop,size=(632,580),gravity=Center' />

    </div>
   </> 
  )
}

export default Home
