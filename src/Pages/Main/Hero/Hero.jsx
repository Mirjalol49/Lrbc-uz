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
            <h1 className='hero-slogan'>SIFAT VA ISHONCH</h1>
            <h2 className='hero-in-title'>Biz Haqimizda</h2>
            <p className='hero-in-text'>«L-R-B Construction» MCHJ qurilish-montaj ishlari bozorida mustahkam asosga ega bo’lgan va o’zining barcha kafolat majburiyatlarini bajarib keluvchi ishonchli kompaniya sifatida iz qoldirib kelmoqda. Bizning buyurtmachi va mijozlarimiz eng maqbul narxlarimiz, tez fursatda va yuqori sifali qurilish-montaj ishlarimizdan mamnundirlar.</p>
            <br />
            <p className='hero-in-text'>Bugungi kunga kelib korxonamiz tomonidan ko'plab zamonaviy bino-inshoatlar, ishlab-chiqarish binolari, omborxonalar, biznes markazlar, savdo markazlari, yo'l qurulish va obodonlashtirish, ta'mirlash hamda ichimlik suvi ta’minoti tarmoqlarining keng asortimentli qurilish-montaj loyihlari bajarilagan.</p>


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
