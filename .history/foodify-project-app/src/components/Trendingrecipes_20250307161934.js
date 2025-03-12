import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Trendingrecipes = () => {
    const settings = {
        dots: true,           
        infinite: true,       // Infinite looping
        speed: 500,          // Transition speed
        slidesToShow: 1,     // Show one slide at a time
        slidesToScroll: 1,   // Scroll one slide at a time
        autoplay: true,      // Auto-slide
        autoplaySpeed: 2000, // Slide every 2 seconds
        arrows: false        // Hide next/prev arrows
      };
  return (
    <div>
      
    </div>
  )
}

export default Trendingrecipes
