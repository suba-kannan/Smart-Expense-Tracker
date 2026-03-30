import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full border-b border-gray-800/50">
    <div className="flex items-center space-x-2">
      <Link to="/" className="text-white font-bold text-xl tracking-tight">Precision</Link>
    </div>
    <div className="hidden md:flex items-center space-x-8 text-sm text-gray-400 relative">
      <NavLink 
        to="/" 
        className={({ isActive }) => `relative pb-1 transition-colors ${isActive ? 'text-white' : 'hover:text-white'}`}
      >
        {({ isActive }) => (
          <>
            Dashboard
            {isActive && <span className="absolute bottom-[-1.6rem] left-0 w-full h-[3px] bg-[#78E28D] rounded-t-sm"></span>}
          </>
        )}
      </NavLink>
      <NavLink to="/reports" className="hover:text-white transition-colors">Reports</NavLink>
      <NavLink to="/transactions" className="hover:text-white transition-colors">Transactions</NavLink>
      <NavLink to="/goals" className="hover:text-white transition-colors">Goals</NavLink>
      <NavLink to="/settings" className="hover:text-white transition-colors">Settings</NavLink>
    </div>
    <div className="flex items-center space-x-6">
      <button className="text-gray-400 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      </button>
      <button className="text-gray-400 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
      </button>
    </div>
  </nav>
);

export default Navbar;
