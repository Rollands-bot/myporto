import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, BookOpen, X, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'dev', label: 'Development' },
  { id: 'ai', label: 'AI & Automation' },
];

// Every claim below comes from the CV or the project's own repo; keep it that way.
const PROJECTS = [
  {
    id: 0,
    title: 'Omnichannel AI CRM — Holywings Group',
    category: 'ai',
    tags: ['Agentic AI', 'CRM'],
    description: 'AI chatbots & CRM unifying WhatsApp, Instagram, TikTok & YouTube into one dashboard for 200+ CS agents — 85% of inquiries resolved automatically through agentic intent routing.',
    tech: ['Meta API', 'LLM Orchestration', 'n8n', 'Node.js', 'PostgreSQL'],
    image: '/assets/projects/crm.webp',
    caseStudy: {
      context: 'Holywings Group · AI Specialist · Apr 2026 – present',
      problem:
        'Customer service for hundreds of outlets ran across four social platforms. Conversations were scattered, agents switched between apps, and the same common questions were answered by hand all day.',
      built: [
        'AI chatbots on the Meta API (WhatsApp Business & Instagram), TikTok and YouTube, answering customers from one centralized system.',
        'An omnichannel CRM that pulls every conversation into a single inbox for real-time monitoring of complaints and inquiries.',
        'Agentic intent routing and automatic complaint classification: common questions are answered, the rest go to the right human agent.',
        'AI agents connected to the internal POS and HRIS for customer history and personalized product recommendations inside the chat.',
        'A monitoring dashboard for CSAT, conversation volume and AI response accuracy.',
      ],
      flow: ['WhatsApp · Instagram · TikTok · YouTube', 'Webhook ingest', 'AI agent: intent routing', 'Auto-reply or hand-off', 'Unified CRM inbox'],
      results: [
        { value: '85%', label: 'common inquiries resolved without an agent' },
        { value: '−70%', label: 'ops cost: IDR 35M → 12.5M / month' },
        { value: '78 → 92%', label: 'CSAT within the first 3 months' },
        { value: '+50%', label: 'faster CS response speed' },
      ],
    },
  },
  {
    id: 1,
    title: 'Clipink — AI Video Clipper',
    category: 'ai',
    tags: ['AI Video', 'SaaS'],
    description: 'Founded a platform that auto-clips & distributes short-form video from live streams. AI highlight detection cut editing time from 3 hours to 45 minutes — 50+ creators, 1M+ views/month.',
    tech: ['Golang', 'React', 'AI Video Processing', 'Railway'],
    link: 'https://www.clipink.id/',
    image: '/assets/clipink.webp',
    caseStudy: {
      context: 'Clipink.id · Founder & Platform Developer · Dec 2025 – present',
      problem:
        'Turning a long live stream into short clips for TikTok, Reels and Shorts was manual work: find the moments, cut, export, post. About three hours of editing per video.',
      built: [
        'A platform that extracts, clips and distributes short-form video from live streams or long-form uploads to TikTok, Instagram Reels and YouTube Shorts.',
        'AI highlight detection using audio and visual signals, so editors start from the best moments instead of the full recording.',
        'A dashboard for creators and content managers to manage thousands of clips, with post scheduling and performance analytics.',
        'A Golang + React backend designed for daily traffic spikes from dozens of creators.',
      ],
      flow: ['Live stream / long video', 'Highlight detection (audio + visual)', 'Auto-clip', 'Schedule', 'TikTok · Reels · Shorts'],
      results: [
        { value: '3h → 45m', label: 'production time per video' },
        { value: '70%', label: 'of manual editing automated' },
        { value: '50+', label: 'active creators in 6 months, no paid marketing' },
        { value: '1M+', label: 'views per month for client content' },
      ],
    },
  },
  {
    id: 9,
    title: 'Noorah Fragrances — 3D E-Commerce',
    category: 'dev',
    tags: ['3D Web', 'E-Commerce'],
    description: 'Luxury Arabian perfume store with scroll-driven 3D bottles modeled in Blender and a day-to-night theme that shifts as you scroll. Products, collections & prices are managed in Shopify.',
    tech: ['SvelteKit', 'Three.js', 'GSAP', 'Blender', 'Shopify', 'Cloudflare'],
    link: 'https://www.noorahfragrances.com',
    image: '/assets/noorah.webp',
    caseStudy: {
      context: 'Noorah Fragrances · Client project · 2026',
      problem:
        'A luxury Arabian fragrance brand wanted its bottles to be the story: a warm, cream daytime homepage that turns into night as you scroll, with each perfume shown in 3D, while the team keeps running the shop themselves.',
      built: [
        'Bottles modeled in Blender and exported as optimized GLB (meshopt geometry, WebP textures) so the 3D loads fast.',
        'Scroll-driven 3D scenes with Threlte / three.js and GSAP ScrollTrigger on SvelteKit 2.',
        'A day → night system where a single scroll value drives the whole palette and the 3D lighting together, instead of two themes and a crossfade.',
        'Products, notes, collections and prices managed in Shopify, so the client edits the catalog without touching code.',
        'Prerendered to static HTML and deployed on Cloudflare.',
      ],
      flow: ['Blender models', 'GLB optimize (meshopt + WebP)', 'Threlte scene + ScrollTrigger', 'Shopify catalog', 'Cloudflare (prerendered)'],
      results: [
        { value: 'Live', label: 'noorahfragrances.com' },
        { value: '1 value', label: 'drives palette + 3D lighting' },
        { value: 'Self-serve', label: 'catalog & prices in Shopify' },
      ],
    },
  },
  {
    id: 2,
    title: 'Interactive 3D Brand Campaigns',
    category: 'dev',
    tags: ['Three.js', 'WebGL'],
    description: 'Immersive product-customization experiences for European fashion & lifestyle brands (Wearebrand, France) — engagement up 40%, load time down from 5s to 1.8s.',
    tech: ['Three.js', 'React Three Fiber', 'Laravel', 'GitHub Actions'],
    link: 'https://wearebrand.io',
    image: '/assets/projects/wearebrand.webp',
  },
  {
    id: 3,
    title: 'SIMRS Hospital ERP — RS Keluarga Kita',
    category: 'dev',
    tags: ['Healthcare', 'Enterprise'],
    description: 'Hospital ERP serving 500+ daily medical staff with 15+ REST APIs for BPJS, pharmacy & laboratory integrations — 99.9% availability during peak hours.',
    tech: ['Laravel', 'React', 'MySQL', 'REST API'],
    link: 'https://updatesimrs.vercel.app/login',
    image: '/assets/projects/simrs.webp',
  },
  {
    id: 5,
    title: 'HRIS Pro — Enterprise',
    category: 'dev',
    tags: ['HR Tech', 'SaaS'],
    description: 'The complete solution for modern HR teams. Track attendance, manage payroll, and streamline recruitment.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Vercel'],
    link: 'https://hris-human-resource-information-sys.vercel.app/',
    image: '/assets/projects/hris.webp',
  },
];

const OTHER_WORK = [
  {
    title: 'Point of Sales System',
    note: 'Retail POS with inventory management · React, Tailwind',
    link: 'https://pointofsalesss.vercel.app/',
  },
  {
    title: 'PT Pelatihan Profit Internasional',
    note: 'Company website & course catalog · WordPress, SEO',
    link: 'https://www.ptppi.id/',
  },
  {
    title: 'Rocket Digital — Performance Marketing',
    note: '+50% organic traffic in 3 months, CPA −12% · Google & Meta Ads',
    certs: [
      { label: 'Certificate 1', link: '/assets/Sertiifikat.jpg' },
      { label: 'Certificate 2', link: '/assets/Sertificate.jpg' },
    ],
  },
];

const CaseStudy = ({ project, onClose }) => {
  const cs = project.caseStudy;

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-dark/60 backdrop-blur-sm md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl md:rounded-3xl shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:text-brand-orange transition-colors"
        >
          <X size={20} />
        </button>

        <img src={project.image} alt="" className="w-full aspect-[16/10] object-cover object-top" />

        <div className="p-6 md:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{cs.context}</p>
          <h3 className="text-display text-3xl md:text-4xl mt-2 mb-8">{project.title}</h3>

          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-3">The problem</h4>
          <p className="text-gray-600 leading-relaxed mb-8">{cs.problem}</p>

          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-3">What I built</h4>
          <ul className="space-y-3 mb-8">
            {cs.built.map((item) => (
              <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-3">How it flows</h4>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {cs.flow.map((step, i) => (
              <React.Fragment key={step}>
                {i > 0 && <ChevronRight size={16} className="text-gray-300" />}
                <span className="text-sm font-semibold bg-gray-50 border border-gray-100 px-3 py-2 rounded-lg text-dark">{step}</span>
              </React.Fragment>
            ))}
          </div>

          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">Results</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {cs.results.map((r) => (
              <div key={r.label} className="bg-gray-50 rounded-2xl p-4">
                <p className="text-display text-2xl">{r.value}</p>
                <p className="text-xs text-gray-500 font-medium mt-1 leading-snug">{r.label}</p>
              </div>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-bold hover:bg-brand-orange transition-colors"
            >
              Visit live site <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openStudy, setOpenStudy] = useState(null);

  const filteredProjects = PROJECTS.filter(project =>
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 container-padding bg-white">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
           <h2 className="text-display text-5xl md:text-6xl mb-4">Selected Work</h2>
           <p className="text-gray-500 text-lg max-w-xl">
             Explore my portfolio across software engineering, AI automation, and digital performance.
           </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                        activeCategory === cat.id
                        ? 'bg-dark text-white border-dark'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-dark hover:text-dark'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-8">
        <AnimatePresence>
            {filteredProjects.map((project) => (
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full min-h-[450px]"
                >
                    {/* Image Area */}
                    <div className="relative h-[250px] overflow-hidden bg-gray-100">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors"></div>

                        {/* Floating Action */}
                        {project.link && (
                          <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                               <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Open ${project.title}`}
                                  className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center text-dark hover:text-brand-orange transition-colors"
                               >
                                  <ArrowUpRight size={20} />
                               </a>
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-dark shadow-sm">
                                {project.tags[0]}
                            </span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow relative bg-white">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-brand-orange transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            {project.caseStudy && (
                              <button
                                onClick={() => setOpenStudy(project)}
                                className="self-start inline-flex items-center gap-2 text-sm font-bold text-dark hover:text-brand-orange transition-colors"
                              >
                                <BookOpen size={16} /> Read case study
                              </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Other Work */}
      <div className="mt-20">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Other work</h3>
        <div className="divide-y divide-gray-100 border-y border-gray-100">
          {OTHER_WORK.map((item) => (
            <div key={item.title} className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-5">
              <div>
                <p className="font-bold text-dark">{item.title}</p>
                <p className="text-sm text-gray-500">{item.note}</p>
              </div>
              {item.certs ? (
                <div className="flex gap-2">
                  {item.certs.map((cert) => (
                    <a
                      key={cert.label}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold bg-gray-100 px-3 py-2 rounded-lg hover:bg-brand-orange hover:text-white transition-colors"
                    >
                      <Award size={14} /> {cert.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-dark hover:text-brand-orange transition-colors"
                >
                  Visit <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openStudy && <CaseStudy project={openStudy} onClose={() => setOpenStudy(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
