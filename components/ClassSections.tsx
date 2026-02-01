import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Users, User, Globe } from 'lucide-react';

const ClassSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.from('.section-header', {
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        force3D: true
      });

      // Enhanced Card Entrance Animation
      const grids = gsap.utils.toArray('.class-grid');
      grids.forEach((grid: any) => {
        gsap.from(grid.querySelectorAll('.class-card'), {
          scrollTrigger: {
            trigger: grid,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotationX: 15,
          duration: 1,
          stagger: {
            amount: 0.4,
            ease: 'power2.out'
          },
          ease: 'elastic.out(1, 0.8)',
          force3D: true,
          clearProps: 'transform,opacity'
        });
      });
      
      // Featured Image Entrance
      gsap.from('.featured-image', {
        scrollTrigger: {
          trigger: '.featured-image',
          start: 'top 90%',
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: 'power4.out',
        force3D: true
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const classSets = [
    {
      title: "Grade 10–11 Media & Communication",
      color: "from-cyan-500 to-blue-500",
      featuredImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
      classes: [
        { type: "Group Classes", icon: <Users size={20} />, desc: "Collaborative learning in small batches." },
        { type: "Individual Classes", icon: <User size={20} />, desc: "One-on-one attention for focus." },
        { type: "Online Classes", icon: <Globe size={20} />, desc: "Convenient sessions via Zoom." }
      ]
    },
    {
      title: "Grade 12–13 Media",
      color: "from-purple-500 to-pink-500",
      featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      classes: [
        { type: "Group Classes", icon: <Users size={20} />, desc: "Advanced discourse in groups." },
        { type: "Individual Classes", icon: <User size={20} />, desc: "Intensive exam-prep for A/Ls." },
        { type: "Online Classes", icon: <Globe size={20} />, desc: "Recorded sessions & materials." }
      ]
    }
  ];

  return (
    <section id="classes" ref={containerRef} className="py-12 bg-black/30 perspective-1000">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 section-header will-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Educational <span className="text-cyan-400">Programs</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">Structured curriculum designed to excel in school exams while gaining practical media insights.</p>
        </div>

        {classSets.map((set, sIdx) => (
          <div key={sIdx} className="mb-10 last:mb-0">
            <h3 className="text-xl font-bold mb-5 flex items-center space-x-3">
              <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${set.color} flex items-center justify-center text-white text-sm shadow-lg`}>
                {sIdx === 0 ? "📘" : "🎓"}
              </span>
              <span>{set.title}</span>
            </h3>

            {set.featuredImage && (
              <div className="featured-image mb-6 relative group overflow-hidden rounded-2xl glass p-1.5 border-white/10 shadow-xl will-animate">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-70 pointer-events-none"></div>
                <img 
                  src={set.featuredImage} 
                  alt={`${set.title} Program`} 
                  loading="lazy"
                  className="w-full h-auto max-h-[450px] object-cover rounded-xl transform transition-transform duration-1000 group-hover:scale-[1.02] will-change-transform"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className={`px-3 py-1 bg-gradient-to-r ${set.color} text-white text-[10px] font-bold rounded-full uppercase tracking-widest mb-2 inline-block shadow-lg`}>
                    {sIdx === 0 ? "Ordinary Level" : "Advanced Level"}
                  </span>
                  <p className="text-white text-lg font-bold">Join the Most Successful Media Classes</p>
                </div>
              </div>
            )}

            <div className="class-grid grid md:grid-cols-3 gap-5">
              {set.classes.map((c, cIdx) => (
                <div key={cIdx} className="class-card group relative p-5 glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:border-cyan-500/40 will-animate transform-gpu">
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${set.color} opacity-5 blur-xl group-hover:opacity-15 transition-opacity`}></div>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${set.color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    {c.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">{c.type}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassSections;