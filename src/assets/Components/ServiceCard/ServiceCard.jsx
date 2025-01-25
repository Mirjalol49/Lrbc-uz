import React from 'react'
import './ServiceCard.css'
import commercial from "../../Images/commercial.webp";
const ServiceCard = ({ImgFile, title}) => {
  return (
    <div className='servicecard'>
      <img className='servicecard-img' src={commercial} alt="service image" />
      <h3 className='servicecard-title'>{title}</h3>
    </div>
  )
}

export default ServiceCard
