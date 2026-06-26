import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SiSalesforce, SiReact } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import { HiOutlineUserGroup } from 'react-icons/hi2';

interface SkillCategory {
  title: string;
  icon: ReactNode;
  items: string[];
}

export default function Skills(): ReactNode {
  const skillsConfig: SkillCategory[] = [
    {
      title: "Core Salesforce Platform",
      icon: <SiSalesforce className="text-xl text-sfElectric" />,
      items: ["Sales & Service Cloud", "Apex Development", "Lightning Web Components (LWC)", "Advanced Flows", "OmniStudio Architecture", "Salesforce CPQ", "Experience Cloud"]
    },
    {
      title: "Technical Architecture",
      icon: <VscServerProcess className="text-xl text-blue-600" />,
      items: ["Solution Design blueprints", "Custom API Integrations", "Data Modeling & Security", "DevOps (GitHub / Opsera)", "Large Data Volumes (LDV)", "Asynchronous Patterns"]
    },
    {
      title: "Modern Full-Stack",
      icon: <SiReact className="text-xl text-indigo-600" />,
      items: ["React.js Ecosystem", "TypeScript Mechanics", "Tailwind CSS Layouts", "Vite Bundler Tooling", "REST / JSON Engineering", "Static Hosting Deployments"]
    },
    {
      title: "Leadership & Strategy",
      icon: <HiOutlineUserGroup className="text-xl text-emerald-600" />,
      items: ["Technical Team Mentorship", "Stakeholder Consulting", "Agile Execution delivery", "Architecture Review Boards", "Code Standards Governance", "Requirement Refinement"]
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-sfElectric">Expertise Matrix</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Capabilities & Stack</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsConfig.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/60 rounded-lg border border-black/[0.03]">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, iIdx) => (
                  <span key={iIdx} className="px-3 py-1.5 bg-white/20 border border-black/[0.04] rounded-md text-xs font-semibold text-slate-600 hover:text-slate-900 hover:border-sfElectric/40 hover:bg-sfElectric/5 transition-all duration-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}