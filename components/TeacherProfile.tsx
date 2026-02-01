import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Award, BookOpen, Cpu, Sparkles } from 'lucide-react';

const TeacherProfile: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.profile-title', {
        scrollTrigger: {
          trigger: '.profile-title',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6
      });

      gsap.from('.qual-card', {
        scrollTrigger: {
          trigger: '.qual-grid',
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const qualifications = [
    {
      icon: <Award className="text-cyan-400" size={24} />,
      title: "8+ Years Experience",
      desc: "Excellence in teaching Media & Communication."
    },
    {
      icon: <BookOpen className="text-purple-400" size={24} />,
      title: "Diploma Completed",
      desc: "Specialized in professional media studies."
    },
    {
      icon: <Cpu className="text-blue-400" size={24} />,
      title: "Modern Techniques",
      desc: "Interactive digital tools for easy learning."
    },
    {
      icon: <Sparkles className="text-pink-400" size={24} />,
      title: "Student-Centric",
      desc: "Focused on individual growth and success."
    }
  ];

  return (
    <section id="profile" ref={containerRef} className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 profile-title">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Meet Your <span className="text-cyan-400">Mentor</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-3 text-white">Sisira Kumara</h3>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              With nearly a decade in the education sector, I specialize in bridging the gap between traditional media theories and contemporary digital communication. I use modern teaching techniques to ensure every student excels.
            </p>
            <div className="qual-grid grid md:grid-cols-2 gap-4">
              {qualifications.map((q, idx) => (
                <div key={idx} className="qual-card p-4 glass rounded-xl hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="mb-2 transform group-hover:scale-105 transition-transform duration-300">
                    {q.icon}
                  </div>
                  <h4 className="text-base font-bold mb-1 text-white">{q.title}</h4>
                  <p className="text-gray-400 text-[11px] leading-tight">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-25 transition duration-500"></div>
              <div className="relative w-full glass border-white/10 rounded-2xl p-2.5 overflow-hidden shadow-2xl">
                <img 
                  src="https://i.postimg.cc/g2gJTVX5/IMG-20260114-WA0005.jpg" 
                  alt="Sisira Kumara - Media Expert" 
                  className="rounded-xl w-full h-auto max-h-[480px] object-cover filter brightness-90 contrast-110 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border-white/20 backdrop-blur-md">
                    <p className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase mb-0.5">Media Expert</p>
                    <p className="text-white font-bold text-lg">Sisira Kumara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;