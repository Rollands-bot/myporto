import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 container-padding bg-gray-50">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left: Typography Focus */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-display text-4xl mb-8 leading-tight">
            More than just code.<br />
            <span className="text-gray-400">A strategic partner.</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
            <p>
              I don't just "write software". I engineer systems that solve actual business bottlenecks. 
              Founders hire me when they need to move from <span className="bg-brand-orange/10 text-brand-orange px-1">MVP to Scale</span> without breaking things.
            </p>
            <p>
              My background blends deep technical expertise (Full JS Ecosystem) with a pragmatic approach to operations. 
              I automate the boring stuff so your team can focus on growth.
            </p>
          </div>

          {/* Skill Tags */}
          <div className="mt-10">
             <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Core Stack</h3>
             <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL','Supabase','Cloudflare','Vercel','Netlify','n8n','Docker'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-dark shadow-sm">
                    {tech}
                  </span>
                ))}
             </div>
          </div>
        </motion.div>


        {/* Right: Minimalist Timeline */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-gray-200"></div>
          
          <div className="space-y-12 pl-8">
             
             {/* Item 1 */}
             <div className="relative">
                <div className="absolute -left-[37px] top-1 w-5 h-5 bg-brand-orange rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-dark">Web Developer</h3>
                <p className="text-gray-500 mb-2 font-medium">PT. Pelatihan Profit International</p>
                <p className="text-sm text-gray-400 font-mono mb-3">Feb 2025 – Jan 2025</p>
                <p className="text-gray-600 leading-relaxed">
                   Spearheading web infrastructure, custom WP development, and high-performance API integrations.
                </p>
             </div>

             {/* Item 2 */}
             <div className="relative">
                <div className="absolute -left-[37px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-bold text-dark">Digital Specialist (Intern)</h3>
                <p className="text-gray-500 mb-2 font-medium">Rocket Digital Academy</p>
                <p className="text-sm text-gray-400 font-mono mb-3">Sep 2025 – Oct 2025</p>
                <p className="text-gray-600 leading-relaxed">
                   Optimized web assets for 100/100 PageSpeed scores and managed multi-channel technical SEO campaigns.
                </p>
             </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
