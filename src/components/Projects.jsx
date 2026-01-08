import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, Award, Code, Cpu, BarChart } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'dev', label: 'Development' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'marketing', label: 'Marketing & SEO' },
];

const PROJECTS = [
  {
    id: 0,
    title: 'Clipink - AI Video Shorts',
    category: 'ai',
    tags: ['AI Video', 'SaaS'],
    description: 'AI-powered platform for generating short video clips and viral content from long-form videos automatically.',
    tech: ['Next.js', 'PostHog', 'AI Video API', 'React' , 'Vercel' , 'Railway'],
    link: 'https://www.clipink.id/',
    image: '/assets/clipink.png',
    type: 'web'
  },
  {
    id: 7,
    title: 'SyncCAD - Desain Grafis',
    category: 'marketing',
    tags: ['Marketing', 'Performance'],
    description: 'High-performance web architecture optimized for maximum search visibility and lightning-fast core web vitals.',
    tech: ['Cms Wordpress', 'Elementor Pro', 'SEO'],
    link: 'https://synccad.com/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    type: 'web'
  },
  {
    id: 1,
    title: 'Point of Sales System',
    category: 'dev',
    tags: ['Retail', 'POS'],
    description: 'A modern Point of Sales application designed to streamline retail transactions and inventory management.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    link: 'https://pointofsalesss.vercel.app/',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80',
    type: 'web'
  },
  {
    id: 2,
    title: 'HRIS Pro - Enterprise',
    category: 'dev',
    tags: ['HR Tech', 'SaaS'],
    description: 'The complete solution for modern HR teams. Track attendance, manage payroll, and streamline recruitment.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Vercel'],
    link: 'https://hris-human-resource-information-sys.vercel.app/',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80',
    type: 'web'
  },
  {
    id: 3,
    title: 'SIMRS Hospital OS',
    category: 'dev',
    tags: ['Healthcare', 'Enterprise'],
    description: 'Comprehensive hospital OS handling 50k+ patient records with real-time sync and HIPAA compliance.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    link: 'https://updatesimrs.vercel.app/login',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    type: 'web'
  },
  {
    id: 4,
    title: 'AutoSupport AI',
    category: 'ai',
    tags: ['Automation', 'Bot'],
    description: 'Autonomous WhatsApp/Telegram agent that resolves 70% of customer queries without human input.',
    tech: ['n8n', 'Python', 'OpenAI API', 'Docker'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80',
    type: 'ai'
  },
  {
    id: 5,
    title: 'PT Pelatihan Profit International',
    category: 'dev',
    tags: ['Corporate', 'Education'],
    description: 'Official website for a leading training institution. Integrated course catalogs and registration systems.',
    tech: ['WordPress', 'MySQL', 'SEO'],
    link: 'https://www.ptppi.id/',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80',
    type: 'web'
  },
  {
    id: 6,
    title: 'Rocket Digital Performance',
    category: 'marketing',
    tags: ['SEO', 'Optimization'],
    description: 'Digital Marketing Internship. Intensive training in technical SEO, performance optimization, and conversion rate strategies.',
    tech: ['Google Analytics', 'Semrush', 'PageSpeed'],
    link: '/assets/Sertiifikat.jpg',
    image: '/assets/Sertiifikat.jpg',
    type: 'cert',
    certs: [
        { label: 'Certificate 1', link: '/assets/Sertiifikat.jpg' },
        { label: 'Certificate 2', link: '/assets/Sertificate.jpg' }
    ]
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProjects = PROJECTS.filter(project => 
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

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
                    onClick={() => {
                        setActiveCategory(cat.id);
                        setVisibleCount(4); // Reset visible count on category change
                    }}
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
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence>
            {filteredProjects.slice(0, visibleCount).map((project) => (
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
                    <div className="relative h-[250px] overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors"></div>
                        
                        {/* Floating Action */}
                        <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                             <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center text-dark hover:text-brand-orange transition-colors"
                             >
                                <ArrowUpRight size={20} />
                             </a>
                        </div>

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

                        {/* Tech Stack / Certificates */}
                        <div className="mt-auto pt-6 border-t border-gray-100">
                            {project.type === 'cert' && project.certs ? (
                                <div className="flex gap-3">
                                    {project.certs.map((cert, idx) => (
                                        <a 
                                            key={idx}
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
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {visibleCount < filteredProjects.length && (
          <div className="mt-12 text-center">
              <button 
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-dark font-bold rounded-full transition-all"
              >
                  Load More Projects <ArrowUpRight size={18} />
              </button>
          </div>
      )}
    </section>
  );
};

export default Projects;
