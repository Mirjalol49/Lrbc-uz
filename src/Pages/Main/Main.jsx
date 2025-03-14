import React from 'react'
import Hero from './Hero/Hero'
import Partners from './Partners/Partners'
import Services from './Services/Services'
import Testimonilas from './Testimonials/Testimonilas'
// import FAQ from './Faq/Faq'
import Showcase from "./Showcase/Showcase"
import Cta from '../Cta/Cta'
import Certificate from "./Certificate/Certificate"

const Main = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <Showcase/>
      <Certificate/>
      {/* <Testimonilas /> */}
    
      {/* <FAQ /> */}
      <Cta/>
    </main>
  )
}

export default Main
