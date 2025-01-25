import React from 'react'
import './Services.css'


// IMAGES
import Commercial from "../../../assets/Images/commercial.webp";
import Foundation from "../../../assets/Images/foundation.webp";
import Interior from "../../../assets/Images/interior.webp";
import Renovation from "../../../assets/Images/renovation.webp";
import Residental from "../../../assets/Images/residental.webp";
import Structural from "../../../assets/Images/structural.webp";
const Services = () => {
  return (
    <section className='services' id='services'>
      <div className="container">
        <h2 className='services-title'>Services</h2>
        <div className="servicecard-wrapper">
 <div className='servicecard'>
      <img className='servicecard-img' src={Renovation} alt="service image" />
      <h3 className='servicecard-title'>Renovation and Remodeling</h3>
    </div>

    <div className='servicecard'>
      <img className='servicecard-img' src={Commercial} alt="service image" />
      <h3 className='servicecard-title'>Commercial Construction</h3>
    </div>


    <div className='servicecard'>
      <img className='servicecard-img' src={Interior} alt="service image" />
      <h3 className='servicecard-title'>Home Interior Design</h3>
    </div>


    <div className='servicecard'>
      <img className='servicecard-img' src={Structural} alt="service image" />
      <h3 className='servicecard-title'>Structural Engineering</h3>
    </div>

    <div className='servicecard'>
      <img className='servicecard-img' src={Foundation} alt="service image" />
      <h3 className='servicecard-title'>Foundation Construction</h3>
    </div>

    <div className='servicecard'>
      <img className='servicecard-img' src={Residental} alt="service image" />
      <h3 className='servicecard-title'>Residential Construction</h3>
    </div>
    </div>
      </div>
    </section>
  )
}

export default Services
