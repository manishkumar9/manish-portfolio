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
    <div className="min-h-screen bg-[#f5ebe0] text-slate-800 font-sans selection:bg-sfElectric/20 overflow-x-hidden">
      {/* Background Ambient Warm/Cool Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sfElectric/8 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sfCyan/4 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <section id="hero"><HeroSection /></section>
        <section id="about"><AboutMe /></section>
        <section id="journey"><Timeline /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="contact"><ContactMe /></section>
        
        <footer className="py-8 text-center text-xs text-slate-500 border-t border-black/5 bg-[#f5ebe0]/80 backdrop-blur-md">
          © {new Date().getFullYear()} Manish Kumar. Built with React + TypeScript + Tailwind. Hosted via Cloudflare Pages.
        </footer>
      </div>
    </div>
  );
}