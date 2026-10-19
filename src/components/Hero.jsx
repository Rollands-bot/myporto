import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import TiltPortrait from './TiltPortrait';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-32 pb-20 container-padding relative overflow-hidden bg-light">
      
      {/* Dynamic Background Element */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 mb-8">
           <span className="w-3 h-3 bg-brand-orange rounded-full animate-pulse"></span>
           <span className="font-semibold text-sm tracking-wide uppercase text-gray-500">Based in Indonesia</span>
        </div>

        <h1 className="text-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Software <span className="text-gray-400">Engineer</span><br />
          <span className="text-brand-orange text-4xl md:text-6xl lg:text-7xl block mt-2">&amp; AI Specialist.</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-10 items-center mt-12">
          <div className="lg:col-span-7 order-2 lg:order-1">
             <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
               6+ years shipping <span className="text-dark">end-to-end platforms</span> — ERP, POS, HRIS — and <span className="text-dark">AI chatbots &amp; omnichannel CRM</span> across Meta, TikTok &amp; YouTube.
               Currently focused on agentic AI and LLM orchestration that turn operations into autopilot.
             </p>
             
             <div className="flex gap-4 max-w-md">
                <Link to="projects" smooth={true} duration={500} className="flex-1">
                  <button className="w-full group bg-dark text-white py-5 px-8 rounded-2xl text-lg font-semibold flex items-center justify-between hover:bg-brand-orange transition-colors duration-300">
                    See Work
                    <ArrowDownRight className="group-hover:rotate-[-45deg] transition-transform duration-300" />
                  </button>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                   <button className="bg-gray-100 hover:bg-gray-200 text-dark p-5 rounded-2xl transition-colors duration-300">
                     <ArrowRight size={28} />
                   </button>
                </Link>
             </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">
             {/* Abstract Shapes Decoration */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-orange/20 to-blue-500/20 blur-3xl -z-10 rounded-full animate-pulse"></div>
             
             <TiltPortrait src="/assets/profile.webp" alt="Wahyudiyanto" />
          </div>
        </div>

        {/* Impact Proof Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mt-20 pt-10 border-t border-gray-200">
          {[
            { value: '6+', label: 'Years Experience' },
            { value: '70%', label: 'Ops Cost Reduced' },
            { value: '200+', label: 'CS Agents Empowered' },
            { value: '1M+', label: 'Monthly Views Generated' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-display text-4xl md:text-5xl">
                {stat.value.replace(/[+%]$/, '')}
                <span className="text-brand-orange">{stat.value.match(/[+%]$/)?.[0]}</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Marquee Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-6 opacity-10 pointer-events-none">
        <div className="animate-marquee inline-block">
          <span className="text-[120px] font-black mx-8">SOFTWARE ENGINEERING AGENTIC AI LLM ORCHESTRATION AUTOMATION SCALABILITY</span>
          <span className="text-[120px] font-black mx-8">SOFTWARE ENGINEERING AGENTIC AI LLM ORCHESTRATION AUTOMATION SCALABILITY</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
