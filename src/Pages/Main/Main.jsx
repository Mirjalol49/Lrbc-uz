import React from 'react'
import Hero from './Hero/Hero'
import Partners from './Partners/Partners'
import Services from './Services/Services'
import Testimonilas from './Testimonials/Testimonilas'
import FAQ from './Faq/Faq'
import Cta from '../Cta/Cta'

const Main = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <Testimonilas />
      {/* <FAQ /> */}
      <Cta/>
    </main>
  )
}

export default Main
