
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        force3D: true
      });
    }, sectionRef);
    return () => ctx.revert();
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
      <div className="container mx-auto px-6 max-w-4xl z-10 hero-content will-animate">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 backdrop-blur-md">
          <Sparkles className="text-cyan-400 w-4 h-4" />
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em]">Next-Gen Media Education</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
          Master the Art of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
            Communication
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Professional Grade 10–13 media classes with Sisira Kumara. 
          Bridge the gap between traditional theory and digital innovation with expert mentorship.
        </p>
        
        <div className="flex flex-col sm:row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => scrollTo('apply')}
            className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-extrabold text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center space-x-3"
          >
            <span>Start Learning Now</span>
            <Play size={20} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollTo('classes')}
            className="w-full sm:w-auto px-10 py-5 glass text-white rounded-2xl font-bold hover:bg-white/10 active:scale-95 transition-all border-white/20"
          >
            Browse Batch Details
          </button>
        </div>
        
        <div className="mt-16 flex items-center justify-center space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="text-[10px] uppercase tracking-widest font-bold">Grade 10-11 O/L</div>
           <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
           <div className="text-[10px] uppercase tracking-widest font-bold">Grade 12-13 A/L</div>
           <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
           <div className="text-[10px] uppercase tracking-widest font-bold">Online & Physical</div>
        </div>
      </div>
      
      {/* Decorative element to blend video with content */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#05020a] to-transparent"></div>
    </section>
  );
};

export default Hero;