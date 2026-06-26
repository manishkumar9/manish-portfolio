import { useState, useEffect, type ReactNode } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4 shadow-sm shadow-black/[0.02]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold tracking-tight text-slate-900">
          MK<span className="text-sfElectric">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 text-xs font-semibold tracking-wide border border-sfElectric text-sfElectric hover:bg-sfElectric hover:text-white transition-all duration-300 rounded-md">
            Let's Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800 hover:text-slate-900 text-2xl">
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-[#f5ebe0]/98 backdrop-blur-xl border-b border-black/5 flex flex-col p-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-base text-slate-700 hover:text-slate-900 py-2 font-medium">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-3 border border-sfElectric text-sfElectric rounded-md text-sm font-medium">
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
}