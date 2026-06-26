import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function AboutMe(): ReactNode {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Summary Meta Blocks */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex flex-col justify-between p-8 glass-panel overflow-hidden relative group">
            {/* Ambient Background Glow inside Placeholder */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sfElectric/10 rounded-full blur-2xl group-hover:bg-sfElectric/20 transition-all duration-500" />
            
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">// Senior Tech Leadership</div>
            
            <div>
              <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-sfElectric">10+</div>
              <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase mt-2">Years Enterprise Experience</div>
            </div>

            <div className="text-xs text-gray-400 font-medium leading-relaxed border-t border-white/5 pt-4">
              {/* TODO: Replace profile placeholder path or metadata */}
              Salesforce Ecosystem Strategy & Engineering Blueprints
            </div>
          </div>
        </motion.div>

        {/* Right Side: Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-sfElectric">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging complex enterprise needs with elegant cloud architecture.
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            {/* TODO: Replace placeholder details with full career overview */}
            Over the past decade, I have focused on designing, deploying, and leading cross-functional Salesforce programs for major technology firms and financial organizations. I approach development from a foundational system standpoint, ensuring high data integrity, robust API architectures, and highly intuitive user layers.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            From coding custom multi-tier Lightning Web Components and structural asynchronous Apex processes to engineering continuous delivery pipelines (CI/CD) and OmniStudio layers, I focus on turning massive CRM setups into clean, high-velocity developer pipelines.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sfElectric" /> Solution blueprints
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sfElectric" /> Custom integrations
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sfElectric" /> Team leadership
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sfElectric" /> DevOps automation
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}