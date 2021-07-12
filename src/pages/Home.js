import React from 'react';

import Header from '../containers/Header';
import HeroHome from '../containers/HeroHome';
import Footer from '../containers/Footer';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      <HeroHome />
      <Footer /> 

      {/*  Site footer */}
   

    </div>
  );
}

export default Home;
