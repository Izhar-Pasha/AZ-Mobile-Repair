import React from 'react';
import HeroSection from '../Herosection/HeroSection';
import Category from '../Category/Category';
import Navbar from "../Navbar/Header";
import Product from '../Product/Product';


const Home = () => {
  return (
  <>
  <Navbar />
  <HeroSection/>
  <Product/>
  <Category/>
  </>
  )
}

export default Home;
