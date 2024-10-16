import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Prices from './components/Prices';
import Reservation from './components/Form/Reservation';
import Rental from './components/Rental';
import Footer from './components/Footer';
import Logo from './assets/logo.svg';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }; 

  return (
    <Router>
      <main className="bg min-h-screen flex flex-col my-10">
        <div className='app flex flex-col flex-grow rounded-3xl'> {/* rounded to border radius 1.5rem w tailwindcss*/}
          <nav className='mx-7 mt-3 xs:mx-4'>
            <div className="flex justify-between items-center px-4 py-2">
              <div className="logo">
                <img src={Logo} alt="Logo" className="h-13" />
              </div>
              {/* Navigation for larger resolutions */}
              <nav className="navigation hidden lg:flex"> 
                <ul className="flex">
                  <li><NavLink to="/" className={({ isActive }) => `path mx-5 ${isActive ? 'active' : ''}`} end>O nas</NavLink></li>
                  <li><NavLink to="/prices" className={({ isActive }) => `path mx-5 ${isActive ? 'active' : ''}`}>Cennik</NavLink></li>
                  <li><NavLink to="/reservation" className={({ isActive }) => `path mx-5 ${isActive ? 'active' : ''}`}>Rezerwacja</NavLink></li>
                  <li><NavLink to="/rental" className={({ isActive }) => `path mx-5 ${isActive ? 'active' : ''}`}>Warunki wynajmu</NavLink></li>
                </ul>
              </nav>
              <button className="block lg:hidden" onClick={toggleMobileMenu}> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
          {/* Mobile navigation */}
          <nav className={`lg:flex lg:items-center ${isMobileMenuOpen ? 'show' : 'hide'} nav-container`}> 
            <ul className="flex flex-col items-end mx-10">
              <li><NavLink to="/" className="path my-2" onClick={toggleMobileMenu} end>O nas</NavLink></li>
              <li><NavLink to="/prices" className="path my-2" onClick={toggleMobileMenu}>Cennik</NavLink></li>
              <li><NavLink to="/reservation" className="path my-2" onClick={toggleMobileMenu}>Rezerwacja</NavLink></li>
              <li><NavLink to="/rental" className="path my-2" onClick={toggleMobileMenu}>Warunki wynajmu</NavLink></li>
            </ul>
          </nav>
          {/* Website content */}
          <article className="flex-grow">
            <Routes> 
              <Route path="/" element={<Home />} /> 
              <Route path="/prices" element={<Prices />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/rental" element={<Rental />} />
            </Routes>
          </article>
          <FooterWrapper />
        </div>
      </main>
    </Router>
  );
}

// Conditional footer display
const FooterWrapper: React.FC = () => {
  const location = useLocation(); 
  return location.pathname !== '/reservation' ? <Footer /> : null; 
};

export default App;
