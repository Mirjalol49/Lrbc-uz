import React from 'react'
import './Services.css'


// IMAGES
import Commercial from "../../../assets/Images/commercial.webp";
import Foundation from "../../../assets/Images/foundation.webp";
import Interior from "../../../assets/Images/interior.webp";
import Renovation from "../../../assets/Images/renovation.webp";
import Residental from "../../../assets/Images/residental.webp";
import Structural from "../../../assets/Images/structural.webp";
import ServiceC from '../../../assets/Components/ServiceC/ServiceC';
const Services = () => {
  return (
    <section className='services' id='services'>
      <div className="container">
        <h2 className='services-title'>Services</h2>
        <div className="servicecard-wrapper">
 
     


    <ServiceC title={"Renovation and Remodeling"} img={Renovation} />
    <ServiceC title={"Commercial Construction"} img={Commercial} />
    <ServiceC title={"Home Interior Design"} img={Interior} />
    <ServiceC title={"Structural Engineering"} img={Structural} />
    <ServiceC title={"Foundation Construction"} img={Foundation} />
    <ServiceC title={"Residential Construction"} img={Residental} />
    
    </div>
    
      </div>
    </section>
  )
}

export default Services
