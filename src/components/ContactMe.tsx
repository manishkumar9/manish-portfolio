import { useState, type FormEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

export default function ContactMe(): ReactNode {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect this frontend validation block to Formspree, Web3Forms, or Cloudflare Worker APIs
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
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Let's build something great together.</h3>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          Whether you're looking to optimize a global CRM roadmap, design a complex system integration layout, or discuss engineering strategy, let's start the conversation.
        </p>

        {/* Dynamic Social Link Channels */}
        <div className="flex justify-center gap-6 py-4">
          {/* TODO: Exchange with your absolute personal URL indicators */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="p-3 bg-white/5 border border-white/5 rounded-full text-xl text-gray-400 hover:text-sfElectric hover:border-sfElectric/40 hover:bg-sfDark transition-all duration-300">
            <SiLinkedin />
          </a>
          <a href="mailto:your.email@domain.com" aria-label="Email Address" className="p-3 bg-white/5 border border-white/5 rounded-full text-xl text-gray-400 hover:text-sfCyan hover:border-sfCyan/40 hover:bg-sfDark transition-all duration-300">
            <HiOutlineMail />
          </a>
        </div>

        {/* Interactive Input Form Layer */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl text-left max-w-2xl mx-auto mt-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="text-sfElectric text-4xl">✓</div>
              <h4 className="text-lg font-bold text-white">Message Transmitted Successfully</h4>
              <p className="text-sm text-gray-400">Thank you for reaching out. I'll review your architecture parameters and respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                <input required id="form-name" type="text" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className="w-full bg-white/[0.02] border border-white/5 focus:border-sfElectric/50 focus:bg-sfDark/50 outline-none rounded-md px-4 py-3 text-sm text-white transition-all duration-300" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                <input required id="form-email" type="email" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className="w-full bg-white/[0.02] border border-white/5 focus:border-sfElectric/50 focus:bg-sfDark/50 outline-none rounded-md px-4 py-3 text-sm text-white transition-all duration-300" placeholder="john@enterprise.com" />
              </div>
              <div>
                <label htmlFor="form-msg" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Message Parameter</label>
                <textarea required id="form-msg" rows={4} value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} className="w-full bg-white/[0.02] border border-white/5 focus:border-sfElectric/50 focus:bg-sfDark/50 outline-none rounded-md px-4 py-3 text-sm text-white transition-all duration-300 resize-none" placeholder="Describe the project scope or architectural requirements..." />
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-sfElectric to-sfElectric/80 hover:from-sfElectric hover:to-sfCyan text-white font-medium text-sm rounded-md shadow-md transition-all duration-300">
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}