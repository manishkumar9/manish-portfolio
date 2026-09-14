import { type ReactNode } from 'react';

// --- DATA STRUCTURES ---

const DOMAINS = [
  "Energy and Utility Cloud",
  "Sales Cloud",
  "Service Cloud"
];

const SKILLS = [
  "Permission & Sharing Architecture",
  "Validation Rule Design",
  "Report & Dashboard Architecture",
  "Data Modeling",
  "Release & Deployment Strategy",
  "Technical Governance"
];

const CERTIFICATIONS = [
  {
    title: "Salesforce Certified Application Architect",
    description: "Demonstrates deep expertise in data modeling, role hierarchy design, declarative security boundaries, and sharing mechanics at scale."
  },
  {
    title: "Salesforce Certified Data Architecture & Management Designer",
    description: "Covers enterprise data governance, large data volume (LDV) management, master data management (MDM), and custom indexing strategies."
  },
  {
    title: "Salesforce Certified Development Lifecycle & Deployment Designer",
    description: "Focuses on environment strategy, sandbox management, automated CI/CD pipelines, package governance, and zero-downtime releases."
  },
  {
    title: "Salesforce Certified Integration Architecture Designer",
    description: "Validates ability to design complex high-performing enterprise integration solutions across heterogeneous systems."
  },
  {
    title: "Salesforce Certified Sharing & Visibility Designer",
    description: "Focuses on complex security requirements, custom Apex sharing, programmatic visibility, and large-scale data access modeling."
  },
  {
    title: "Salesforce Certified Agentforce Specialist",
    description: "Validates hands-on knowledge in building, configuring, and deploying autonomous AI agents and prompt templates."
  },
  {
    title: "Salesforce Certified AI Associate",
    description: "Covers foundational AI concepts, ethical data processing, and practical applications of generative AI across Salesforce."
  },
  {
    title: "Salesforce Accredited Professional - Energy & Utilities Cloud",
    description: "Specialized accreditation in utility data models, customer service flows, billing integrations, and energy domain solutions."
  },
  {
    title: "Energy & Utility Developer I",
    description: "Demonstrates specialized technical skills in building industry-specific software components for energy & utility platforms."
  },
  {
    title: "Salesforce Certified Industry CPQ Developer",
    description: "Covers complex quoting engines, enterprise product catalogs, pricing rules, and Vlocity/Industry CPQ implementations."
  },
  {
    title: "Salesforce Certified OmniStudio Developer",
    description: "Specializes in building declarative digital interfaces using FlexCards, OmniScripts, Integration Procedures, and DataRaptors."
  },
  {
    title: "Salesforce Certified Advanced Administrator",
    description: "Demonstrates mastery over complex security frameworks, advanced analytics, custom automation, and org management."
  },
  {
    title: "Salesforce Certified Sales Cloud Consultant",
    description: "Validates expertise in designing scalable end-to-end sales processes, pipeline management, and opportunity workflows."
  },
  {
    title: "Salesforce Certified Service Cloud Consultant",
    description: "Covers omni-channel support routing, case management architectures, knowledge bases, and contact center operations."
  },
  {
    title: "Salesforce Certified Platform Developer I",
    description: "Validates foundational programmatic development using Apex, Lightning Web Components (LWC), Visualforce, and SOQL/SOSL."
  },
  {
    title: "Salesforce Certified Platform App Builder",
    description: "Covers custom application design using declarative capabilities, custom objects, flow automations, and page layouts."
  },
  {
    title: "Salesforce Certified Administrator",
    description: "Core credential establishing proficiency across user management, security configuration, standard objects, and reporting."
  }
];

const EXPERIENCE = [
  {
    years: "MAR 2026 — PRESENT",
    role: "Deputy Vice President",
    company: "Kotak Mahindra Bank",
    impact: "Directing technical architecture and platform governance across core banking integrations. Architecting high-concurrency event-driven patterns, strict role-based access controls, and custom API layers handling high-volume daily financial transactions."
  },
  {
    years: "MAR 2025 — MAR 2026",
    role: "Technical Architect",
    company: "Salesforce",
    impact: "Advised strategic enterprise accounts on multi-cloud system design, Large Data Volume (LDV) indexing, and enterprise security models. Led architecture review boards (ARBs) to enforce code standards, data archival frameworks, and robust platform governance."
  },
  {
    years: "APR 2022 — MAR 2025",
    role: "Senior Technical Consultant",
    company: "Salesforce",
    impact: "Spearheaded complex implementations across Energy & Utilities and Financial Services sectors. Designed modular OmniStudio digital journeys, complex CPQ engines, and automated continuous integration/deployment (CI/CD) pipelines using Opsera."
  },
  {
    years: "JAN 2021 — APR 2022",
    role: "Senior Salesforce Developer",
    company: "PayPal",
    impact: "Engineered high-performance Lightning Web Components and optimized asynchronous Apex batch frameworks for global payment processing systems, cutting transaction processing latency across distributed services."
  },
  {
    years: "JUN 2018 — JAN 2021",
    role: "Consultant",
    company: "Deloitte Consulting",
    impact: "Delivered scalable end-to-end Sales Cloud and Service Cloud implementations. Designed custom data models, complex validation frameworks, and secure REST/SOAP integration layers for multi-national clients."
  },
  {
    years: "OCT 2015 — DEC 2017",
    role: "System Engineer",
    company: "Infosys",
    impact: "Built core platform foundation, developing custom Apex triggers, Visualforce components, and declarative automation workflows to support enterprise digital transformations."
  }
];

const CASE_STUDIES = [
  {
    id: "01",
    title: "Refactoring Legacy Sharing Mechanics for 10M+ Records",
    challenge: "An enterprise org was experiencing severe record locking errors and slow query execution times due to over-engineered implicit sharing rules and redundant group memberships across 10 million custom records.",
    approach: "Audited existing ownership structures, stripped out redundant apex sharing rules, and transitioned to a lean criteria-based sharing model combined with explicit Account Teams and targeted public groups.",
    outcome: "Eliminated record locking errors during peak transaction windows and improved report execution speeds by over 60% without compromising data security boundaries."
  },
  {
    id: "02",
    title: "Standardizing Release Governance across a 4-Org Ecosystem",
    challenge: "Multiple developer streams were frequently overwriting metadata, causing unexpected production regressions and manual multi-day deployment resolution cycles.",
    approach: "Designed a centralized git-based source-driven deployment strategy using sfdx pipelines. Enforced mandatory environment branch validation, static code scanning, and automated sandbox refresh schedules.",
    outcome: "Cut deployment cycle times from days to under 45 minutes while reducing deployment-related production incidents to near zero."
  },
  {
    id: "03",
    title: "Enterprise Data Governance & Archival Pipeline Design",
    challenge: "Rapid data growth was pushing storage limits near 100% capacity, degrading system search performance and driving up platform renewal licensing costs.",
    approach: "Architected an automated data lifecycle strategy. Classified historical data boundaries, built criteria-driven asynchronous batch pipelines, and offloaded non-operational records to a low-cost data lake with cross-object reporting views.",
    outcome: "Reclaimed 40% of native org storage capacity and significantly reduced API request latency for active daily users."
  }
];

// --- MAIN COMPONENT ---

export default function App(): ReactNode {
  return (
    <div className="min-h-screen bg-paper-100 text-ink-900 font-sans">
      
      {/* STICKY TOP NAVIGATION */}
      <header className="sticky top-0 z-50 bg-paper-100/90 backdrop-blur-md border-b border-paper-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="font-serif font-bold text-lg text-archBlue hover:text-archBlue-hover tracking-tight">
            Manish Kumar<span className="text-ochre">.</span>
          </a>
          <nav className="flex space-x-6 text-sm font-medium text-ink-700">
            <a href="#about" className="hover:text-archBlue transition-colors">About</a>
            <a href="#experience" className="hover:text-archBlue transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-archBlue transition-colors">Certifications</a>
            <a href="#work" className="hover:text-archBlue transition-colors">Selected Work</a>
            <a href="#contact" className="hover:text-archBlue transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        
        {/* SECTION 1: HERO */}
        <section id="hero" className="py-24 md:py-32 border-b border-paper-200 relative animate-blueprint-entrance">
          <div className="relative z-10 px-6 py-8 max-w-3xl">
            <span className="inline-block font-mono text-xs tracking-wider text-ochre uppercase font-semibold mb-4">
              System Blueprint & Governance
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 tracking-tight leading-[1.15] mb-6">
              Manish Kumar
            </h1>
            <p className="font-mono text-sm md:text-base text-archBlue font-medium mb-6">
              Salesforce Architect — 11 Years Ecosystem Experience
            </p>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed font-normal mb-8 max-w-2xl">
              I design resilient, enterprise Salesforce architectures that maintain integrity, security, and peak performance as organizations scale.
            </p>

            {/* Quick Contact Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-ink-700 mb-8 border-l-2 border-ochre pl-4">
              <a href="mailto:Hellomanish0008@gmail.com" className="hover:text-archBlue transition-colors">
                Hellomanish0008@gmail.com
              </a>
              <span className="text-paper-300">|</span>
              <a href="tel:+919677134852" className="hover:text-archBlue transition-colors">
                +91 9677134852
              </a>
              <span className="text-paper-300">|</span>
              <a href="https://www.linkedin.com/in/hellomanish0008" target="_blank" rel="noreferrer" className="hover:text-archBlue transition-colors">
                linkedin.com/in/hellomanish0008
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-archBlue text-white font-medium text-sm rounded hover:bg-archBlue-hover transition-colors shadow-xs"
              >
                Get In Touch
              </a>
              <a 
                href="#work" 
                className="px-6 py-3 border border-paper-300 bg-white text-ink-700 font-medium text-sm rounded hover:border-archBlue transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT, DOMAINS & SKILLS */}
        <section id="about" className="py-20 border-b border-paper-200">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 mb-6">
              Architectural Approach
            </h2>
            <div className="space-y-4 text-ink-700 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                Great architecture is not about building complex custom solutions—it is about establishing clean boundaries, predictable data flows, and maintainable governance frameworks.
              </p>
              <p>
                Over the past 11 years, I have helped organizations transition from ad-hoc operational setups into hardened enterprise environments. My focus centers on balancing declarative efficiency with programmatic discipline, ensuring data security models remain uncompromised even under heavy transaction loads.
              </p>
            </div>

            {/* Primary Domains */}
            <h3 className="font-mono text-xs tracking-wider uppercase text-ochre font-semibold mb-3">
              Primary Domain Expertise
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {DOMAINS.map((domain, index) => (
                <span 
                  key={index}
                  className="px-3.5 py-1.5 bg-archBlue-light border border-archBlue/20 text-archBlue text-xs sm:text-sm font-semibold rounded"
                >
                  {domain}
                </span>
              ))}
            </div>

            {/* Core Competencies */}
            <h3 className="font-mono text-xs tracking-wider uppercase text-ink-500 font-semibold mb-3">
              Core Technical Competencies
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3.5 py-1.5 bg-white border border-paper-300 text-ink-900 text-xs sm:text-sm font-medium rounded shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPERIENCE */}
        <section id="experience" className="py-20 border-b border-paper-200">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 mb-12">
            Professional History
          </h2>
          <div className="space-y-12 max-w-3xl">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
                <div className="md:col-span-4 font-mono text-xs text-ochre font-semibold tracking-wide">
                  {exp.years}
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-xl font-bold text-ink-900 mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-archBlue mb-3">
                    {exp.company}
                  </div>
                  <p className="text-sm text-ink-700 leading-relaxed">
                    {exp.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: EDUCATION */}
        <section id="education" className="py-20 border-b border-paper-200">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 mb-8">
            Academic Background
          </h2>
          <div className="bg-white p-6 border border-paper-200 rounded max-w-3xl flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-ink-900">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-sm font-medium text-archBlue mt-1">
                Indraprastha University, New Delhi
              </p>
            </div>
            <div className="font-mono text-xs text-ochre font-semibold bg-paper-100 px-3 py-1.5 rounded w-fit border border-paper-200">
              AUG 2011 — JUL 2015
            </div>
          </div>
        </section>

        {/* SECTION 5: CERTIFICATIONS */}
        <section id="certifications" className="py-20 border-b border-paper-200">
          <div className="flex justify-between items-baseline mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
              Credentials & Certifications
            </h2>
            <span className="font-mono text-xs text-ochre font-semibold">
              TOTAL: 17 CERTIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white p-6 border border-paper-200 rounded flex flex-col justify-between hover:border-archBlue transition-colors"
              >
                <div>
                  <h3 className="font-bold text-base text-ink-900 mb-3 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-ink-700 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: SELECTED WORK */}
        <section id="work" className="py-20 border-b border-paper-200">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
            Selected Architectural Work
          </h2>
          <p className="text-sm text-ink-700 mb-12 max-w-2xl">
            Detailed breakdowns illustrating problem formulation, technical approach, and operational outcomes across complex enterprise setups.
          </p>

          <div className="space-y-16 max-w-4xl">
            {CASE_STUDIES.map((study) => (
              <article key={study.id} className="bg-white p-8 border border-paper-200 rounded relative">
                <span className="font-mono text-xs text-ink-500 absolute top-6 right-6">
                  CASE //{study.id}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 mb-6 pr-16">
                  {study.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="border-l-2 border-ochre pl-4">
                    <span className="block font-mono text-xs uppercase tracking-wider text-ochre font-semibold mb-2">
                      01. Challenge
                    </span>
                    <p className="text-ink-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="border-l-2 border-archBlue pl-4">
                    <span className="block font-mono text-xs uppercase tracking-wider text-archBlue font-semibold mb-2">
                      02. Approach
                    </span>
                    <p className="text-ink-700 leading-relaxed">
                      {study.approach}
                    </p>
                  </div>

                  <div className="border-l-2 border-paper-300 pl-4">
                    <span className="block font-mono text-xs uppercase tracking-wider text-ink-900 font-semibold mb-2">
                      03. Outcome
                    </span>
                    <p className="text-ink-700 leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 7: CONTACT */}
        <section id="contact" className="py-24 max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
            Initiate Architecture Discussion
          </h2>
          <p className="text-base sm:text-lg text-ink-700 mb-8 leading-relaxed">
            Whether you are planning a large-scale org migration, reviewing security sharing boundaries, or looking to establish release governance—reach out directly.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="mailto:Hellomanish0008@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-archBlue text-white font-medium text-base rounded hover:bg-archBlue-hover transition-colors shadow-xs group"
            >
              <span>Hellomanish0008@gmail.com</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/hellomanish0008" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-4 border border-paper-300 bg-white text-ink-700 font-medium text-base rounded hover:border-archBlue transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-paper-200 py-8 bg-paper-100">
        <div className="max-w-5xl mx-auto px-6 text-xs text-ink-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Manish Kumar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}