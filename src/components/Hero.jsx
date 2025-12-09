import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-32 pb-20 container-padding relative overflow-hidden bg-light">
      
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
          Software <span className="text-gray-400">Engineer.</span><br />
          <span className="text-brand-orange text-4xl md:text-6xl lg:text-7xl block mt-2">AI Automation Enthusiast.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-10 items-center mt-12">
          <div className="md:col-span-7 order-2 md:order-1">
             <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
               I build <span className="text-dark">high-velocity software</span> and <span className="text-dark">autonomous systems</span> for ambitious founders. 
               Combining technical precision with business speed.
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

          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end relative">
             {/* Abstract Shapes Decoration */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-orange/20 to-blue-500/20 blur-3xl -z-10 rounded-full animate-pulse"></div>
             
             <div className="relative group -mt-10 md:-mt-16">
               {/* Unique Blob Shape Mask using border-radius */}
               <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] group-hover:rounded-[40%_60%_70%_30%/40%_50%_60%_50%]">
                  <img 
                    src="/assets/profile.png" 
                    alt="Wahyu Diyanto" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>

               {/* Floating Badge */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
               >
                 <div className="bg-green-100 p-2 rounded-full">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                 </div>
                 <div>
                   <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Status</p>
                   <p className="text-sm font-bold text-dark">Available for Hire</p>
                 </div>
               </motion.div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Marquee Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-6 opacity-10 pointer-events-none">
        <div className="animate-marquee inline-block">
          <span className="text-[120px] font-black mx-8">SOFTWARE ENGINEERING AI AUTOMATION SCALABILITY PERFORMANCE</span>
          <span className="text-[120px] font-black mx-8">SOFTWARE ENGINEERING AI AUTOMATION SCALABILITY PERFORMANCE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
