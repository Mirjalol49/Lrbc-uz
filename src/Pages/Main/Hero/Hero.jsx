import React from 'react'
import './Hero.css'
import Spinning from '../../../assets/Components/Spinning'
import HeroImage from '../../../assets/Images/herochar.png'
import { useLanguage } from '../../../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className='hero-section'>
      <div className="container">
        <div className='hero-title-wrapper'>
          <div className='hero-in-wrapper'>
            <h1 className='hero-slogan'>{t.hero.slogan}</h1>
            <h2 className='hero-in-title'>{t.hero.title}</h2>
            <p className='hero-in-text'>{t.hero.text1}</p>
            <br />
            <p className='hero-in-text'>{t.hero.text2}</p>
          </div>
        </div>
        <div className='hero-img-bg'>
          <img className='hero-img' src={HeroImage} alt="background image" />
          <div className='hero-circle'>
            <Spinning className="spinning" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
