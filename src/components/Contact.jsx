import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 container-padding bg-dark text-white rounded-t-[40px] -mt-10 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-display text-white text-5xl md:text-7xl mb-8">
            Ready to scale?
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
             I'm currently accepting new projects. If you need a technical partner who understands business velocity, let's connect.
          </p>
          
          <a href="mailto:mrwahyudiyanto@gmail.com" className="inline-flex items-center gap-4 bg-white text-dark px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300">
             Start a Project <ArrowRight />
          </a>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
           <p>© 2025 Wahyu. Based in Indonesia.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/~wahyudiyanto/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/Rollands-bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
