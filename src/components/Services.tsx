import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCpuChip, HiOutlineCloudArrowUp, HiOutlineLightBulb, HiOutlineShieldCheck } from 'react-icons/hi2';

interface ServiceCard {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function Services(): ReactNode {
  const offerings: ServiceCard[] = [
    {
      title: "Enterprise Solution Architecture",
      description: "Designing durable, scalable multi-cloud system architectures. Structuring resilient data models and permission profiles optimized for governance.",
      icon: <HiOutlineCpuChip className="text-2xl text-sfElectric" />
    },
    {
      title: "Custom CRM Integrations",
      description: "Engineering secure custom API layers, handling complex nested JSON payloads, and setting up high-volume integrations with legacy external data lakes.",
      icon: <HiOutlineCloudArrowUp className="text-2xl text-sfCyan" />
    },
    {
      title: "Technical Lead Advisory",
      description: "Mentoring engineering squads, establishing core static analysis checks, managing code reviews, and automating complex Opsera/GitHub delivery pipelines.",
      icon: <HiOutlineLightBulb className="text-2xl text-yellow-400" />
    },
    {
      title: "Declarative & Programmatic Alignment",
      description: "Aligning complex Apex trigger frameworks alongside enterprise Flow structures to ensure platform velocity and minimize technical debt.",
      icon: <HiOutlineShieldCheck className="text-2xl text-emerald-400" />
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-t from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sfElectric">Offerings & Specializations</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">How I Add Value</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-xl flex flex-col justify-between group hover:border-sfElectric/30 transition-all duration-300"
            >
              <div>
                <div className="mb-6 p-3 bg-white/5 border border-white/5 rounded-lg w-fit group-hover:bg-sfDark transition-colors duration-300">
                  {svc.icon}
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight mb-3">{svc.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}