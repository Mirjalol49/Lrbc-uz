import React from 'react'
import Brands from '../../../assets/Components/Brands/Brands';
import './Partners.css';
const Partners = () => {
  return (
    <section className='partners'>
      <div className="container">
        <h2 className='partners-title'>Partners and Investors</h2>
        <p className='partners-text'>We believe that collobration is the key to building a sustainable future. Our investors and partners play a crucial role in driving our mission forward.</p>
        <Brands />
      </div>
    </section>
  )
}

export default Partners
