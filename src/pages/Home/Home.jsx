import React from 'react'
import { ATovar } from '../../components/ATovar/ATovar'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { KTovari } from '../../components/KTovari/KTovari'
import { LTovari } from '../../components/LTovari/LTovari'

export const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ATovar/>
      <KTovari/>
      <LTovari/>
      <Footer/>
    </div>
  )
}
