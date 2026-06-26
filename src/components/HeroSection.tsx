import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function HeroSection(): ReactNode {
  return (
    <div className="h-screen w-full flex items-center justify-center relative px-6 text-center overflow-hidden">
      {/* Animated Subtle Digital Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-3 py-1 mb-6 border border-sfElectric/30 bg-sfElectric/10 text-sfElectric rounded-full text-xs font-semibold uppercase tracking-widest"
        >
          {/* TODO: Replace with real brand context if desired */}
          Enterprise Cloud Architecture
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          {/* TODO: Replace with real user branding details */}
          Manish Kumar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-3xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sfElectric to-sfCyan"
        >
          Salesforce Architect & Lead Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          {/* TODO: Replace with real custom tagline */}
          Architecting resilient, multi-cloud Salesforce solutions for enterprise ecosystems. Specializing in high-scale integrations, Lightning Web Components, Apex blueprints, and automated DevOps operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#journey" className="px-6 py-3.5 bg-gradient-to-r from-sfElectric to-sfElectric/80 hover:from-sfElectric hover:to-sfCyan text-white font-medium text-sm rounded-md shadow-lg shadow-sfElectric/20 flex items-center gap-2 group transition-all duration-300">
            View My Journey <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href="#contact" className="px-6 py-3.5 border border-white/10 hover:border-white/20 glass-panel text-white font-medium text-sm rounded-md transition-all duration-300">
            Let's Connect
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest font-mono text-gray-500">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </div>
  );
}