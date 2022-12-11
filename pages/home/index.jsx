import React from 'react';
import About from '../components/About';
import BestSeller from '../components/BestSeller';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Games from '../components/Games';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PopularGames from '../components/PopularGames';
import Soon from '../components/Soon';

const index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Games />
      <BestSeller />
      <PopularGames />
      <Soon />
      <Comment />
      <Footer />
    </div>
  );
};

export default index;
