import React from 'react';
import { Link } from 'react-router-dom';
import dashboardImage from '../assets/dashboard-mockup.png';

const Hero = () => (
  <div className="w-full max-w-7xl mx-auto px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
    {/* Left Column */}
    <div className="space-y-8 z-10">
      {/* Pill */}
      <div className="inline-flex items-center space-x-2 bg-gray-900/40 border border-gray-800 rounded-md px-3 py-1">
        <span className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase">INTELLIGENT FINANCE</span>
      </div>
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.05] tracking-tight">
        Master Your <br/> Money with <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78E28D] to-[#4DB3B3]">
          Behavioral<br/>Intelligence.
        </span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-gray-400 text-lg max-w-md leading-relaxed">
        Precision goes beyond tracking. We analyze the psychology behind your spending to create effortless financial freedom.
      </p>
      
      {/* Buttons */}
      <div className="flex items-center space-x-4 pt-4">
        <Link to="/register" className="bg-[#78E28D] text-gray-950 font-bold px-8 py-3.5 rounded-xl hover:bg-[#68c87b] transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(120,226,141,0.15)] text-sm">
          Get Started
        </Link>
        <Link to="/login" className="bg-transparent text-white font-semibold px-8 py-3.5 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors text-sm">
          Login
        </Link>
      </div>
    </div>
    
    {/* Right Column - Dashboard Image */}
    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/3] pl-4 md:pl-12 mt-12 lg:mt-0 flex items-center justify-center">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
       
       <img 
         src={dashboardImage} 
         alt="Dashboard mockups" 
         className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl transform lg:translate-x-4 hover:translate-y-[-5px] transition-all duration-500 ring-1 ring-white/5"
       />
    </div>
  </div>
);

export default Hero;
