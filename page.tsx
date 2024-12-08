import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import Categories from './components/Categories'
import Products from './components/Products'
import Footer from './components/Footer'



const page = () => {
  return (
    <div className='min-h-screen'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Feature></Feature>
      <Categories></Categories>
      <Products></Products>
      <Footer></Footer>

      
    </div>
  )
}

export default page
