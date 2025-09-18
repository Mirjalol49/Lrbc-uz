import React from 'react'
import './Hero.css'
import Spinning from '../../../assets/Components/Spinning'
import HeroImage from '../../../assets/Images/herochar.png'
const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="container">
        <div className='hero-title-wrapper'>
        {/* <h1 className='hero-title'>Mamlakatimiz Taraqqiyoti Biz Qurayotgan Asosda!</h1> */}
        <div className='hero-in-wrapper'>
            <h2 className='hero-in-title'>Biz Haqimizda</h2>
            <p className='hero-in-text'>O‘zbekistonning har bir burchagida faoliyat yuritib, biz uning madaniyati mohiyatiga chuqur kirib boramiz, vatandoshlarimizning urf-odatlari va intilishlarini anglaymiz. Kompaniyamiz nafaqat shahar infratuzilmasini rivojlantirishga, balki har bir hududning ruhi va o‘ziga xosligini aks ettiruvchi betakror muhit yaratishga intiladi.</p>
            <div className='hero-in-stats'>350+ Loyihalar ⎯ 280+ Mijozlar</div>
           
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
