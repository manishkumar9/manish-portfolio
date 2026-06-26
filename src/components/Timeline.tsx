import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Job {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export default function Timeline(): ReactNode {
  const careerData: Job[] = [
    {
      role: "Salesforce Architect & Lead Developer",
      company: "Enterprise Financial Institution",
      period: "Present",
      highlights: [
        "Architecting distributed banking frameworks across multi-org Salesforce environments.",
        "Engineered end-to-end custom nested API integrations using high-performance Apex patterns.",
        "Spearheading OmniStudio digital transformation roadmaps and OmniScript journeys."
      ]
    },
    {
      role: "Senior Salesforce Engineer / Lead Developer",
      company: "Global Tech Ecosystem Provider",
      period: "Prior Tenure",
      highlights: [
        "Designed core reusable Lightning Web Components (LWC) utilized across 12 product divisions.",
        "Optimized processing of large datasets, cutting asynchronous batch transaction times by 40%.",
        "Configured robust DevOps pipeline mechanics via Opsera, lowering code deployment friction."
      ]
    },
    {
      role: "Salesforce Technical Consultant",
      company: "Cloud Implementation Services",
      period: "Core Foundations",
      highlights: [
        "Managed declarative automation transitions (Workflows/Process Builders to enterprise Flows).",
        "Implemented Sales Cloud, Service Cloud, and specialized CPQ configuration bundles.",
        "Built detailed entity-relationship models for large-scale customer migrations."
      ]
    }
  ];

  return (
    <div className="py-24 bg-black/[0.01]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sfElectric">Professional History</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">A Decade of Progression</h3>
        </div>

        <div className="relative border-l border-black/10 ml-4 md:ml-32 space-y-12">
          {careerData.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Bullet Anchor */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#f5ebe0] border border-sfElectric group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300" />
              
              {/* Absolute Time Badge on Wide Viewports */}
              <div className="hidden md:block absolute left-[-150px] top-1 text-right w-28 text-xs font-mono font-bold text-slate-400">
                {job.period}
              </div>

              {/* Job Narrative Box */}
              <div className="glass-panel p-6 sm:p-8 rounded-xl transition-all duration-300 hover:border-black/10 hover:shadow-sm group-hover:bg-white/60">
                <span className="inline-block md:hidden text-xs font-mono text-sfElectric font-semibold mb-2">{job.period}</span>
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">{job.role}</h4>
                <h5 className="text-sm font-semibold text-sfElectric mt-1 mb-4">{job.company}</h5>
                
                <ul className="space-y-2.5 text-sm text-slate-600 list-none pl-0">
                  {job.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-sfElectric mt-1 text-xs">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}