import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SiSalesforce, SiTypescript, SiReact, SiTailwindcss, SiGithub } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import { HiOutlineUserGroup } from 'react-icons/hi2';

interface SkillCategory {
  title: string;
  icon: ReactNode;
  items: string[];
}

export default function Skills(): ReactNode {
  // TODO: Fine-tune list categorizations matching your design goals
  const skillsConfig: SkillCategory[] = [
    {
      title: "Core Salesforce Platform",
      icon: <SiSalesforce className="text-xl text-sfElectric" />,
      items: ["Sales & Service Cloud", "Apex Development", "Lightning Web Components (LWC)", "Advanced Flows", "OmniStudio Architecture", "Salesforce CPQ", "Experience Cloud"]
    },
    {
      title: "Technical Architecture",
      icon: <VscServerProcess className="text-xl text-sfCyan" />,
      items: ["Solution Design blueprints", "Custom API Integrations", "Data Modeling & Security", "DevOps (GitHub / Opsera)", "Large Data Volumes (LDV)", "Asynchronous Patterns"]
    },
    {
      title: "Modern Full-Stack",
      icon: <SiReact className="text-xl text-indigo-400" />,
      items: ["React.js Ecosystem", "TypeScript Mechanics", "Tailwind CSS Layouts", "Vite Bundler Tooling", "REST / JSON Engineering", "Static Hosting Deployments"]
    },
    {
      title: "Leadership & Strategy",
      icon: <HiOutlineUserGroup className="text-xl text-emerald-400" />,
      items: ["Technical Team Mentorship", "Stakeholder Consulting", "Agile Execution delivery", "Architecture Review Boards", "Code Standards Governance", "Requirement Refinement"]
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-sfElectric">Expertise Matrix</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Capabilities & Stack</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsConfig.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, iIdx) => (
                  <span key={iIdx} className="px-3 py-1.5 bg-white/[0.02] border border-white/5 rounded-md text-xs font-medium text-gray-400 hover:text-white hover:border-sfElectric/30 hover:bg-sfElectric/5 transition-all duration-200">
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