import React from 'react'
import { Banner, Category, Header, Search, Products, AddvertisementBanner, Electronics, Footer } from '../../component'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner />
      <Search/>
      <Category/>
      <Products/>
      <AddvertisementBanner/>
      <Electronics/>
      <Footer/>
    </>
  )
}

export default Home