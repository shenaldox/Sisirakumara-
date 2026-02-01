
import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCircle2, Send } from 'lucide-react';
import { ApplicationFormData, Grade, ClassType } from '../types';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    studentName: '',
    grade: Grade.GRADE_10_11,
    classType: ClassType.GROUP,
    contactNumber: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.form-box', {
        scrollTrigger: {
          trigger: '.form-box',
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "94714718191";
    const text = encodeURIComponent(
      `*New Application Received*\n\n` +
      `*Student Name:* ${formData.studentName}\n` +
      `*Grade:* ${formData.grade}\n` +
      `*Class Type:* ${formData.classType}\n` +
      `*Contact:* ${formData.contactNumber}\n` +
      `*Message:* ${formData.message || 'N/A'}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="apply" ref={containerRef} className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="form-box glass p-6 md:p-10 rounded-[2rem] border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
              <p className="text-gray-400 text-sm">We will contact you shortly via WhatsApp/Call.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-cyan-400 font-bold hover:underline text-sm">Send another</button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Apply <span className="text-cyan-400">Now</span></h2>
                <p className="text-gray-400 text-sm">Quickly fill the form to register for classes.</p>
              </div>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Student Name</label>
                  <input required type="text" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} placeholder="Full name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Parent Contact</label>
                  <input required type="tel" value={formData.contactNumber} onChange={(e) => setFormData({...formData, contactNumber: e.target.value})} placeholder="07X XXX XXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Grade</label>
                  <select value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value as Grade})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none text-sm">
                    <option className="bg-[#1a1a2e]" value={Grade.GRADE_10_11}>{Grade.GRADE_10_11}</option>
                    <option className="bg-[#1a1a2e]" value={Grade.GRADE_12_13}>{Grade.GRADE_12_13}</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Class Type</label>
                  <select value={formData.classType} onChange={(e) => setFormData({...formData, classType: e.target.value as ClassType})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none text-sm">
                    <option className="bg-[#1a1a2e]" value={ClassType.GROUP}>{ClassType.GROUP}</option>
                    <option className="bg-[#1a1a2e]" value={ClassType.INDIVIDUAL}>{ClassType.INDIVIDUAL}</option>
                    <option className="bg-[#1a1a2e]" value={ClassType.ONLINE}>{ClassType.ONLINE}</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message (Optional)</label>
                  <textarea rows={2} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Any questions?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none text-sm"></textarea>
                </div>
                <div className="md:col-span-2 mt-2">
                  <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 text-sm">
                    <span>Submit via WhatsApp</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
