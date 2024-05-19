import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        
        <Categories />
        <Header />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home

