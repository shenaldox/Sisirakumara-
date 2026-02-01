
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.pulse-ring', {
        scale: 1.4,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: 'power1.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-1 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[1.4rem] p-8 md:p-10 relative overflow-hidden">
            <div className="pulse-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-white">Have Questions? <br/><span className="text-cyan-400">Connect Directly</span></h2>
              <p className="text-gray-400 mb-8 text-sm">For immediate inquiries regarding batches and locations.</p>
              
              <div className="text-3xl md:text-4xl font-black text-white mb-8 tracking-wider">
                071 471 8191
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="tel:+94714718191" className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-cyan-400 hover:text-white transition-all shadow-md text-sm">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a href="https://wa.me/94714718191" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-3 glass text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#25D366] transition-all border-white/20 text-sm">
                  <MessageCircle size={18} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
