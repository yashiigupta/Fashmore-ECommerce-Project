import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import HeroBar from '../../components/heroSection/HeroBar'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Categories from '../../components/categories/Categories'
import PayDay from '../../components/payday-sale/PayDayHeroSection'
// import Track from '../../components/track/Track'
// import Testimonial from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <HeroBar />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className= 'bg-footerBg text-black font-semibold hover:text-white px-4 py-2 rounded-xl mb-10'>See more</button>
        </Link>
      </div>
      <PayDay />
      <Categories />
      {/* <Track /> */}
      {/* <Testimonial /> */}
    </Layout>
  )
}

export default Home