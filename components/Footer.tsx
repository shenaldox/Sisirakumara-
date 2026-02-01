
import React, { useState } from 'react';
import { ArrowUp, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import CreditsModal from './CreditsModal';

const Footer: React.FC = () => {
  const [showCredits, setShowCredits] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0514] pt-20 pb-10 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-white">SK</div>
              <span className="text-xl font-bold text-white tracking-tight uppercase">Sisira Kumara</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of media professionals with modern techniques and personalized guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 glass rounded-xl text-gray-400 hover:text-cyan-400 transition-colors"><Facebook size={20}/></a>
              <a href="#" className="p-3 glass rounded-xl text-gray-400 hover:text-cyan-400 transition-colors"><Instagram size={20}/></a>
              <a href="#" className="p-3 glass rounded-xl text-gray-400 hover:text-cyan-400 transition-colors"><Youtube size={20}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollTo('profile')} className="text-gray-400 hover:text-cyan-400 transition-colors">About Teacher</button></li>
              <li><button onClick={() => scrollTo('classes')} className="text-gray-400 hover:text-cyan-400 transition-colors">Our Classes</button></li>
              <li><button onClick={() => scrollTo('apply')} className="text-gray-400 hover:text-cyan-400 transition-colors">Registration</button></li>
              <li><button onClick={() => setShowCredits(true)} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                <span>Developer Credits</span>
                <ExternalLink size={12} />
              </button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Mobile: 071 471 8191</li>
              <li className="text-gray-400">WhatsApp: 071 471 8191</li>
              <li className="text-gray-400">Email: info@sisirakumara.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">© 2024 Sisira Kumara Media Education. All Rights Reserved.</p>
          <button 
            onClick={scrollToTop}
            className="p-4 bg-cyan-500/10 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {showCredits && <CreditsModal onClose={() => setShowCredits(false)} />}
    </footer>
  );
};

export default Footer;
