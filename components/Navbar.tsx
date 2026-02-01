
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform translate-z-0 ${isScrolled ? 'py-3 glass shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
            SK
          </div>
          <span className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            SISIRA KUMARA
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollTo('profile')} className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-cyan-400 transition-colors">Teacher</button>
          <button onClick={() => scrollTo('classes')} className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-cyan-400 transition-colors">Classes</button>
          <button onClick={() => scrollTo('apply')} className="px-5 py-2 glass border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-white active:scale-95 transition-all duration-300">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;