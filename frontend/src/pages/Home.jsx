import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#070A10] font-sans selection:bg-emerald-500/20 overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
