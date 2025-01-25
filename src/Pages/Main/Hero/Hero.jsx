import React from 'react'
import './Hero.css'
import Spinning from '../../../assets/Components/Spinning'
import HeroImage from '../../../assets/Images/herochar.png'
const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="container">
        <div className='hero-title-wrapper'>
        <h1 className='hero-title'>BUILD YOUR DREAM PROPERTY WITH NEW EXPERIENCE</h1>
        <div className='hero-in-wrapper'>
            <h2 className='hero-in-title'>ABOUT US</h2>
            <p className='hero-in-text'>Drive performance and your cross-functional collaboration with easy-to-use dashboards, data visualizations, and automated insights in one click</p>
            <div className='hero-in-stats'>350+ Projects ⎯ 280+ Clients</div>
           
        </div>
        </div>
        <div className='hero-img-bg'>
            <img className='hero-img' src={HeroImage} alt="background image" />
            <div className='hero-circle'>
            <Spinning className="spinning"/>
            </div>
           
        </div>
      </div> 
    </section>
  )
}

export default Hero
