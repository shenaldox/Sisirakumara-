
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeacherProfile from './components/TeacherProfile';
import ClassSections from './components/ClassSections';
import ApplicationForm from './components/ApplicationForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500 selection:text-white bg-transparent">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <TeacherProfile />
        <ClassSections />
        <ApplicationForm />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;