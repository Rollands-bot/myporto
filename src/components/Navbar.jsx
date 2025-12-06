import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero', icon: Home },
    { name: 'About', to: 'about', icon: User },
    { name: 'Projects', to: 'projects', icon: Briefcase },
    { name: 'Contact', to: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* --- DESKTOP FLOATING ISLAND NAVBAR (Centered) --- */}
      <div className="hidden lg:flex fixed top-8 left-0 w-full justify-center z-50 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/5 rounded-full px-2 py-2 flex items-center gap-2"
        >
          {/* Logo Badge */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer px-6 py-3 bg-dark text-white rounded-full hover:scale-105 transition-transform duration-300">
             <span className="font-bold text-lg tracking-tight">W.</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 px-2">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.to} 
                spy={true}
                smooth={true} 
                duration={500} 
                activeClass="bg-gray-100 text-dark"
                className="group relative flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-500 rounded-full hover:text-dark hover:bg-gray-50 transition-all cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <item.icon size={16} className="group-hover:-rotate-12 transition-transform duration-300" />
                  {item.name}
                </span>
                {/* Hover Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 rounded-full" 
                  layoutId="navbar-hover"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pl-2 pr-2">
            <Link to="contact" smooth={true} duration={500}>
               <button className="bg-brand-orange text-white px-6 py-3 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-brand-orange/25 hover:-translate-y-0.5 transition-all duration-300">
                 Hire Me
               </button>
            </Link>
          </div>
        </motion.nav>
      </div>


      {/* --- MOBILE/TABLET NAVBAR (Standard Top Bar with Glassmorphism) --- */}
      <nav className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-6 py-4">
           {/* Mobile Logo */}
           <Link to="hero" smooth={true} duration={500} className="cursor-pointer relative z-50">
              <span className="font-extrabold text-2xl tracking-tight text-dark">W.</span>
           </Link>

           {/* Mobile Menu Toggle */}
           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
             className="relative z-50 p-2 text-dark hover:bg-gray-100 rounded-full transition-colors"
           >
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>

        {/* Mobile Fullscreen Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full bg-white border-b border-gray-100 shadow-xl pt-20 pb-6 px-6 flex flex-col gap-4"
            >
               {navLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.to} 
                    smooth={true} 
                    duration={500} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 text-lg font-semibold text-dark hover:bg-gray-100 active:scale-95 transition-all cursor-pointer"
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange">
                       <item.icon size={20} />
                    </div>
                    {item.name}
                  </Link>
               ))}
               
               <div className="mt-2 pt-4 border-t border-gray-100">
                 <Link to="contact" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full bg-dark text-white py-4 rounded-xl text-base font-bold shadow-lg hover:bg-brand-orange transition-colors">
                      Hire Me
                    </button>
                 </Link>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
