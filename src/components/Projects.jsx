import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Award } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 container-padding bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
           <h2 className="text-display text-5xl md:text-6xl mb-4">Selected Work</h2>
           <p className="text-gray-500 text-lg">Engineering solutions for complex problems.</p>
        </div>
        <a 
          href="https://github.com/Rollands-bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-dark pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors"
        >
           VIEW GITHUB <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 h-auto">
        
        {/* Project New: Point of Sales */}
        <motion.a 
          href="https://pointofsalesss.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-12 bento-card bg-gray-50 group relative overflow-hidden min-h-[500px] flex flex-col justify-between cursor-pointer"
        >
           <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="bg-white p-3 rounded-full shadow-lg">
                 <ArrowUpRight size={24} />
              </div>
           </div>

           <div className="mt-auto z-10 relative">
              <div className="flex gap-2 mb-4">
                 <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider">Retail</span>
                 <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">POS</span>
              </div>
              <h3 className="text-4xl font-bold mb-3">Point of Sales System</h3>
              <p className="text-gray-600 max-w-2xl text-lg mb-6">
                 A modern Point of Sales application designed to streamline retail transactions and inventory management.
              </p>
              <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-500">
                 <span>React</span> • <span>Tailwind CSS</span> • <span>Vercel</span>
              </div>
           </div>

           {/* Image */}
           <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80" 
                alt="POS System" 
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
           </div>
        </motion.a>

        {/* Project New: HRIS Pro */}
        <motion.a 
          href="https://hris-human-resource-information-sys.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-12 bento-card bg-gray-50 group relative overflow-hidden min-h-[500px] flex flex-col justify-between cursor-pointer"
        >
           <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="bg-white p-3 rounded-full shadow-lg">
                 <ArrowUpRight size={24} />
              </div>
           </div>

           <div className="mt-auto z-10 relative">
              <div className="flex gap-2 mb-4">
                 <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider">HR Tech</span>
                 <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">SaaS</span>
              </div>
              <h3 className="text-4xl font-bold mb-3">HRIS Pro - Enterprise System</h3>
              <p className="text-gray-600 max-w-2xl text-lg mb-6">
                 The complete solution for modern HR teams. Track attendance, manage payroll, and streamline recruitment in one place with real-time analytics.
              </p>
              <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-500">
                 <span>React</span> • <span>Tailwind CSS</span> • <span>Node.js</span> • <span>Vercel</span>
              </div>
           </div>

           {/* Image */}
           <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
                alt="HRIS Dashboard" 
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
           </div>
        </motion.a>

        {/* Project 1: Large Feature */}
        <motion.a 
          href="https://updatesimrs.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 bento-card bg-gray-50 group relative overflow-hidden min-h-[500px] flex flex-col justify-between cursor-pointer"
        >
           <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white p-3 rounded-full shadow-lg">
                 <ArrowUpRight size={24} />
              </div>
           </div>

           <div className="mt-auto z-10">
              <div className="flex gap-2 mb-4">
                 <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider">Healthcare</span>
                 <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">Enterprise</span>
              </div>
              <h3 className="text-4xl font-bold mb-3">SIMRS Hospital OS</h3>
              <p className="text-gray-600 max-w-lg text-lg mb-6">
                 A comprehensive operating system for hospitals. Handling 50k+ patient records with real-time sync, complex RBAC, and HIPAA compliance.
              </p>
              <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-500">
                 <span>React</span> • <span>Node.js</span> • <span>PostgreSQL</span> • <span>Docker</span>
              </div>
           </div>

           {/* Visual Abstract Decoration - Replaced with Image */}
           <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" 
                alt="Hospital System Dashboard" 
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
           </div>
        </motion.a>


        {/* Project 2: Vertical Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-4 bento-card bg-dark text-white group relative overflow-hidden flex flex-col justify-between"
        >
           <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
               <img 
                 src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80" 
                 alt="AI Code" 
                 className="w-full h-full object-cover"
               />
           </div>
           
           <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-orange rounded-xl mb-6 flex items-center justify-center">
                 <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">AutoSupport AI</h3>
              <p className="text-gray-400 mb-6">Autonomous WhatsApp/Telegram agent that resolves 70% of customer queries without human input.</p>
           </div>
           
           <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center">
                 <span className="text-sm text-gray-300">Load Reduction</span>
                 <span className="font-bold text-brand-orange">70%</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center">
                 <span className="text-sm text-gray-300">Response Time</span>
                 <span className="font-bold text-green-400">&lt; 2s</span>
              </div>
           </div>
        </motion.div>

        {/* Project 3: Wide Bottom Card - Digital Marketing Internship */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-12 bento-card bg-gray-50 flex flex-col md:flex-row gap-10 items-center group"
        >
           <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Rocket Digital Performance</h3>
              <p className="text-gray-600 text-lg mb-6">
                 Digital Marketing Internship Certificate. Completed intensive training in technical SEO, performance optimization, and conversion rate strategies.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/assets/Sertiifikat.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-dark text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-brand-orange transition-colors duration-300"
                >
                  <FileText size={18} /> Certificate 1
                </a>
                <a 
                  href="/assets/Sertificate.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-dark border border-gray-200 px-5 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
                >
                  <FileText size={18} /> Certificate 2
                </a>
              </div>
           </div>
           <div className="flex-1 w-full h-64 md:h-auto bg-blue-50/50 rounded-2xl relative overflow-hidden min-h-[250px] flex items-center justify-center border border-blue-100">
               <div className="text-center p-8 relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-4 text-brand-blue">
                    <Award size={40} />
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-1">Certificate of Completion</h4>
                  <p className="text-sm text-gray-500">Digital Marketing Internship</p>
               </div>
               
               {/* Decorative Background Pattern */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           </div>
        </motion.div>

        {/* Project 4: PT Pelatihan Profit Internasional */}
        <motion.a 
          href="https://www.ptppi.id/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-12 bento-card bg-white border border-gray-100 flex flex-col md:flex-row gap-10 items-center group mt-6"
        >
           <div className="flex-1">
              <div className="flex gap-2 mb-4">
                 <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Corporate</span>
                 <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">Education</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">PT Pelatihan Profit Internasional</h3>
              <p className="text-gray-600 text-lg mb-6">
                 Official website for a leading training institution. Integrated course catalogs, registration systems, and company profile features to support professional development.
              </p>
              <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-500 mb-6">
                 <span>CMS WordPress</span> • <span>Yoast SEO</span> • <span>Google Analytics</span> • <span>MySQL</span>
              </div>
              <div className="flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-4 transition-all">
                  Visit Website <ArrowUpRight size={18} />
              </div>
           </div>
           <div className="flex-1 w-full h-64 md:h-auto bg-gray-50 rounded-2xl relative overflow-hidden min-h-[250px] border border-gray-200">
               <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80" 
                  alt="Trading Education - Multi Asset" 
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-dark/5"></div>
           </div>
        </motion.a>

      </div>
    </section>
  );
};

export default Projects;
