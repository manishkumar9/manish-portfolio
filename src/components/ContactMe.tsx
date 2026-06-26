import { useState, type FormEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

export default function ContactMe(): ReactNode {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Payload compiled secure:", formState);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-24 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-sfElectric">Get In Touch</h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Let's build something great together.</h3>
        <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
          Whether you're looking to optimize a global CRM roadmap, design a complex system integration layout, or discuss engineering strategy, let's start the conversation.
        </p>

        {/* Channels */}
        <div className="flex justify-center gap-6 py-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="p-3 bg-white/60 border border-black/[0.04] rounded-full text-xl text-slate-500 hover:text-sfElectric hover:border-sfElectric/40 hover:bg-white hover:shadow-sm transition-all duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@domain.com" aria-label="Email Address" className="p-3 bg-white/60 border border-black/[0.04] rounded-full text-xl text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-white hover:shadow-sm transition-all duration-300">
            <HiOutlineMail />
          </a>
        </div>

        {/* Form */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl text-left max-w-2xl mx-auto mt-8 shadow-sm">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="text-sfElectric text-4xl">✓</div>
              <h4 className="text-lg font-bold text-slate-900">Message Transmitted Successfully</h4>
              <p className="text-sm text-slate-600">Thank you for reaching out. I'll review your architecture parameters and respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">Full Name</label>
                <input required id="form-name" type="text" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className="w-full bg-white/40 border border-black/[0.05] focus:border-sfElectric/40 focus:bg-white outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all duration-300 placeholder-slate-400" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">Email Address</label>
                <input required id="form-email" type="email" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className="w-full bg-white/40 border border-black/[0.05] focus:border-sfElectric/40 focus:bg-white outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all duration-300 placeholder-slate-400" placeholder="john@enterprise.com" />
              </div>
              <div>
                <label htmlFor="form-msg" className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">Message Parameter</label>
                <textarea required id="form-msg" rows={4} value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} className="w-full bg-white/40 border border-black/[0.05] focus:border-sfElectric/40 focus:bg-white outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all duration-300 resize-none placeholder-slate-400" placeholder="Describe the project scope..." />
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-sfElectric to-blue-600 hover:from-blue-600 hover:to-sfElectric text-white font-semibold text-sm rounded-md shadow-sm transition-all duration-300">
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}