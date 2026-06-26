import React from 'react';
import { motion } from 'framer-motion';
import {
  ReactIcon, NodeIcon, PostgresIcon, SupabaseIcon, CloudflareIcon,
  VercelIcon, NetlifyIcon, N8nIcon, DockerIcon, AnthropicIcon, OpenaiIcon, OpenClawIcon
} from '../assets/TechIcons';

// Same icon set used in the "Powered By Modern Technologies" slider
const coreStack = [
  { name: 'React', Icon: ReactIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'PostgreSQL', Icon: PostgresIcon },
  { name: 'Supabase', Icon: SupabaseIcon },
  { name: 'Cloudflare', Icon: CloudflareIcon },
  { name: 'Vercel', Icon: VercelIcon },
  { name: 'Netlify', Icon: NetlifyIcon },
  { name: 'n8n', Icon: N8nIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'Anthropic', Icon: AnthropicIcon },
  { name: 'OpenAI', Icon: OpenaiIcon },
  { name: 'OpenClaw', Icon: OpenClawIcon },
];

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
              I don't just ship code — I architect resilient systems that dissolve real business bottlenecks.
              Teams bring me in when they need to move from <span className="bg-brand-orange/10 text-brand-orange px-1">MVP to Scale</span> without breaking production, burning runway, or compromising integrity.
            </p>
            <p>
              With years of senior engineering experience across the full JavaScript ecosystem, AI integration, and cloud infrastructure,
              I design platforms that are fast, maintainable, and built to last — automating the tedious so your team can focus on growth.
            </p>
            <p>
              Security isn't an afterthought in my work — it's woven into every layer. From <span className="bg-brand-orange/10 text-brand-orange px-1">hardened authentication</span> and encrypted data flows to strict access control and proactive vulnerability mitigation,
              I make sure the systems I build don't just scale — they stay protected.
            </p>
          </div>

          {/* Skill Tags */}
          <div className="mt-10">
             <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Core Stack</h3>
             <div className="flex flex-wrap gap-2">
                {coreStack.map(({ name, Icon }) => (
                  <span key={name} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-dark shadow-sm">
                    <Icon className="h-4 w-4 object-contain shrink-0" aria-hidden="true" />
                    {name}
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
             
             {/* Item 0 */}
             <div className="relative">
                <div className="absolute -left-[37px] top-1 w-5 h-5 bg-brand-orange rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-dark">AI Specialist</h3>
                <p className="text-gray-500 mb-2 font-medium">PT Aneka Bintang Gading (Holywings Group)</p>
                <p className="text-sm text-gray-400 font-mono mb-3">Apr 2026 – Present</p>
                <p className="text-gray-600 leading-relaxed">
                   Designing and deploying AI-driven automation and intelligent workflows to power business operations across the Holywings Group.
                </p>
             </div>

             {/* Item 1 */}
             <div className="relative">
                <div className="absolute -left-[37px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-dark">IT Programmer (Software Engineer)</h3>
                <p className="text-gray-500 mb-2 font-medium">PT Cipta Kesehatan Mandiri (RS Keluarga Kita)</p>
                <p className="text-sm text-gray-400 font-mono mb-3">Jan 2026 – Mar 2026</p>
                <p className="text-gray-600 leading-relaxed">
                   Led internal application development, system maintenance, and technical support across hospital operations.
                </p>
             </div>

             {/* Item 2 */}
             <div className="relative">
                <div className="absolute -left-[37px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-dark">Fullstack Developer</h3>
                <p className="text-gray-500 mb-2 font-medium">PT. Pelatihan Profit International</p>
                <p className="text-sm text-gray-400 font-mono mb-3">Feb 2025 – Jan 2026</p>
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
