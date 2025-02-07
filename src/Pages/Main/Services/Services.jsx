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
import Imageser from '../../../assets/Components/ImageService/ImageService';
const Services = () => {
  return (
    <section className='services' id='services'>
      <div className="container">
        <h2 className='services-title'>Xizmatlar</h2>
        <div className="servicecard-wrapper">
 
    
    <Imageser imageUrl={Renovation} text='Ta’mirlash va qayta jihozlash'/>
    <Imageser imageUrl={Commercial} text='Savdo qurilishi'/>
    <Imageser imageUrl={Interior} text='Uy ichki dizayni'/>
    <Imageser imageUrl={Structural} text='Konstruktiv muhandislik'/>
    <Imageser imageUrl={Foundation} text='Poydevor qurish'/>
    <Imageser imageUrl={Residental} text='Turar-joy qurilishi'/>
    
    </div>
    
      </div>
    </section>
  )
}

export default Services
