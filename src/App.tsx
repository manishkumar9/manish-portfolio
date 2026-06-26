import React, { useState, type ReactNode } from 'react';
import { Layers, Cpu, Cloud, ArrowUpRight, CheckCircle2 } from 'lucide-react';

// Structural interfaces for safe typing
interface StatItem {
  label: string;
  value: string;
}

interface ExpertiseItem {
  category: 'all' | 'architecture' | 'integration' | 'strategy';
  title: string;
  icon: ReactNode;
  description: string;
  skills: string[];
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<ExpertiseItem['category']>('all');

  const stats: StatItem[] = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Enterprise Integrations', value: '50+' },
    { label: 'Data Volumes Managed', value: 'Billions' },
    { label: 'Salesforce Core Frameworks', value: 'Expert' }
  ];

  const coreExpertise: ExpertiseItem[] = [
    {
      category: 'architecture',
      title: 'Technical Architecture',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      description: 'Designing enterprise programmatic data blueprints, custom Apex frameworks, and high-performance Lightning Web Components (LWC).',
      skills: ['LWC', 'Apex Core', 'OmniStudio', 'Data Modeling']
    },
    {
      category: 'integration',
      title: 'Enterprise Integration (A2A)',
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      description: 'Developing stateless/stateful middleware integration layers handling high-throughput nested JSON payloads.',
      skills: ['REST/SOAP', 'JSON Parsing', 'Event-Driven Architecture', 'MuleSoft']
    },
    {
      category: 'strategy',
      title: 'Infrastructure & DevOps Strategy',
      icon: <Cloud className="w-5 h-5 text-purple-600" />,
      description: 'Implementing governance controls, multi-tier sandbox release paths, and declarative automation guardrails.',
      skills: ['Opsera / Copado', 'Salesforce DX', 'Scratch Orgs', 'CI/CD Pipelines']
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      title: "Mitigating Concurrency Ceilings in High-Volume Salesforce Apex Engines",
      excerpt: "An architectural deep-dive into resolving row-locking contentions and optimizing governor limit utilization across multi-cloud integrations.",
      date: "June 2026",
      readTime: "5 min read",
      tags: ["Apex Core", "Data Scalability", "Performance Tuning"],
      link: "#"
    },
    {
      title: "Architecting Stateless Integration Layers for Complex Nested JSON Payloads",
      excerpt: "How to leverage robust parsing patterns and event-driven structures to ingest high-throughput programmatic data into core frameworks smoothly.",
      date: "May 2026",
      readTime: "7 min read",
      tags: ["A2A Integration", "REST APIs", "JSON Parsing"],
      link: "#"
    }
  ];

  const filteredExpertise = activeTab === 'all' 
    ? coreExpertise 
    : coreExpertise.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight">Manish<span className="text-blue-600">.</span></a>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#journey" className="hover:text-blue-600 transition-colors">Journey</a>
            <a href="#insights" className="hover:text-blue-600 transition-colors">Insights</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all">
            Consultation
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-6 border border-blue-100">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Available for Independent Advisory Roles
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
              Salesforce Technical Architect & <span className="text-blue-600">Freelance Consultant</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              I partner with forward-thinking enterprises to design scalable digital systems. Over a 10-year career history in technology, I help clean technical debt, integrate complex endpoints, and construct decoupled business engines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-6 py-3 rounded-lg transition-all">
                Discuss an Engagement
              </a>
              <a href="https://www.linkedin.com/in/hellomanish0008" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-6 py-3 rounded-lg transition-all">
                LinkedIn Profile <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Core Focus Area</h3>
            <ul className="space-y-3.5 text-sm text-gray-600">
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Enterprise-Scale Apex & LWC</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Nested JSON & API Routing</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> OmniStudio Applications</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Large Data Volume Strategies</li>
            </ul>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white border border-gray-100 p-8 rounded-2xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left border-gray-100 md:border-r last:border-0 md:pl-4 first:pl-0">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="expertise" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Capabilities</h2>
              <p className="text-gray-500 text-sm">Interactive structural filters built with core React reactive states.</p>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-xl self-start">
              {(['all', 'architecture', 'integration', 'strategy'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredExpertise.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-100 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 border border-gray-100">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="bg-white border border-gray-200 text-gray-600 text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Professional Experience</h2>
          <p className="text-gray-500 text-sm">A strategic breakdown of core career milestones and organizational contributions.</p>
        </div>
        
        <div className="max-w-3xl relative border-l-2 border-gray-200 ml-4 pl-8 space-y-12">
          <div className="relative">
            <div className="absolute -left-[41px] bg-blue-600 w-5 h-5 rounded-full border-4 border-white"></div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Present Engagement</span>
            <h3 className="text-xl font-bold mt-1 text-gray-900">Lead Developer & Technical Architect</h3>
            <p className="text-sm font-medium text-gray-500 mb-3">Enterprise Financial Systems Ecosystem</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Directing system alignment, complex business process pipelines, and multi-cloud platform governance frameworks.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] bg-gray-300 w-5 h-5 rounded-full border-4 border-white"></div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Prior Track</span>
            <h3 className="text-xl font-bold mt-1 text-gray-900">Senior Systems Consultant / Cloud Engineer</h3>
            <p className="text-sm font-medium text-gray-500 mb-3">Global Cloud Infrastructure Enterprises</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Managed application life cycles, mitigated system concurrency ceilings, and engineered custom cross-cloud API microservices.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Insights & Blog Section */}
      <section id="insights" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Architectural Insights</h2>
            <p className="text-gray-500 text-sm">Case studies, programmatic frameworks, and engineering deep-dives.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-50">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-950 text-white py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Discuss Your Architecture</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Need assistance optimizing large data volumes, designing clean integrations, or auditing platform technical debt? Let's connect for an initial technical scoping discussion.
            </p>
            <div className="space-y-4 text-sm text-gray-400">
              <a href="https://www.linkedin.com/in/hellomanish0008" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-blue-400 font-bold tracking-tight">in</span> linkedin.com/in/hellomanish0008
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-950 p-8 rounded-2xl">
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Corporate Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Technical Requirements Overview</label>
                <textarea name="message" rows={4} required placeholder="Outline your data structures, integration endpoints, or project timeframe..." className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl transition-all cursor-pointer">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}