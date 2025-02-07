import React from 'react'
import Brands from '../../../assets/Components/Brands/Brands';
import './Partners.css';
const Partners = () => {
  return (
    <section className='partners'>
      <div className="container">
        <h2 className='partners-title'>Hamkorlar va Investorlar</h2>
        <p className='partners-text'>Biz hamkorlikni barqaror kelajak qurishning kaliti deb bilamiz. Investorlarimiz va sheriklarimiz missiyamizni ilgari surishda hal qiluvchi ahamiyatga ega.</p>
        <Brands />
      </div>
    </section>
  )
}

export default Partners
