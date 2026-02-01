
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ExternalLink, Code2 } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const CreditsModal: React.FC<Props> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.modal-content', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    }, modalRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="modal-content glass w-full max-w-md rounded-3xl p-8 border-white/10 relative z-10 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-6 shadow-xl shadow-cyan-500/20">
            <Code2 size={40} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-1">Developed by</h3>
          <p className="text-cyan-400 font-bold text-xl mb-4">Shenal Anuhas</p>
          
          <div className="space-y-4 mb-8">
             <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">Age</span>
                <span className="text-white font-medium">16+</span>
             </div>
             <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">Contact</span>
                <span className="text-white font-medium">t.me/Crypto_RIV</span>
             </div>
             <div className="flex justify-between items-center py-3">
                <span className="text-gray-400 text-sm">Status</span>
                <span className="text-green-400 font-medium">Open to Projects</span>
             </div>
          </div>

          <a 
            href="https://t.me/Crypto_RIV" 
            target="_blank"
            rel="noreferrer"
            className="w-full py-4 glass text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all border-white/20"
          >
            <span>Contact Developer</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreditsModal;
