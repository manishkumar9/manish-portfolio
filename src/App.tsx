import { type ReactNode } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Services from './components/Services';
import ContactMe from './components/ContactMe';

export default function App(): ReactNode {
  return (
    <div className="min-h-screen bg-sfDark text-gray-100 font-sans selection:bg-sfElectric/30 overflow-x-hidden">
      {/* Background Subtle Mesh Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sfElectric/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sfCyan/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <section id="hero"><HeroSection /></section>
        <section id="about"><AboutMe /></section>
        <section id="journey"><Timeline /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="contact"><ContactMe /></section>
        
        <footer className="py-8 text-center text-xs text-gray-500 border-t border-white/5 bg-sfDark/80 backdrop-blur-md">
          © {new Date().getFullYear()} Manish Kumar. Built with React + TypeScript + Tailwind. Hosted via Cloudflare Pages.
        </footer>
      </div>
    </div>
  );
}