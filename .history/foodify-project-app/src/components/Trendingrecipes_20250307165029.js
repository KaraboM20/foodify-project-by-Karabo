import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Trendingrecipes.css';


const Trendingrecipes = () => {
    const settings = {
        dots: true,           
        infinite: true,       
        speed: 500,          
        slidesToShow: 1,     
        slidesToScroll: 1,   
        autoplay: true,      
        autoplaySpeed: 1500, 
        arrows: false        
      };
  return (
    <div className="trending-recipes">
        <h3>Trending Recipes</h3>
      <Slider {...settings}>
        <div>
          <img src="https://assets.unileversolutions.com/recipes-v2/241556.png?im=Resize,height=580;Crop,size=(632,580),gravity=Center" alt="Recipe 1" />
          <button className='trendingrecipe-button'>view recipes</button>
        </div>
        <div>
          <img src="https://assets.unileversolutions.com/recipes-v2/242377.png?im=Resize,height=580;Crop,size=(632,580),gravity=Center" alt="Recipe 2" />
          <button className='trendingrecipe-button'>view recipes</button>
        </div>
        <div>
          <img src="https://assets.unileversolutions.com/recipes-v2/238269.jpg?im=Resize,height=580;Crop,size=(632,580),gravity=Center" alt="Recipe 3" />
          <button className='trendingrecipe-button'>view recipes</button>
        </div>
      </Slider>
      
    </div>
    
  )
}

export default Trendingrecipes
