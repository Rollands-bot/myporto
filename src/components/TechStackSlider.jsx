import React from 'react';
import { motion } from 'framer-motion';
import { 
  ReactIcon, NodeIcon, SupabaseIcon, JsIcon, TailwindIcon, 
  ViteIcon, PostgresIcon, ExpressIcon, HtmlIcon, CssIcon, GitIcon,
  WordpressIcon, CloudflareIcon, VercelIcon, NetlifyIcon, DockerIcon, MysqlIcon
} from '../assets/TechIcons';

const techStack = [
  { name: "React", Icon: ReactIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Supabase", Icon: SupabaseIcon },
  { name: "WordPress", Icon: WordpressIcon },
  { name: "Cloudflare", Icon: CloudflareIcon },
  { name: "Vercel", Icon: VercelIcon },
  { name: "Netlify", Icon: NetlifyIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "MySQL", Icon: MysqlIcon },
  { name: "JavaScript", Icon: JsIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Vite", Icon: ViteIcon },
  { name: "PostgreSQL", Icon: PostgresIcon },
  { name: "Express", Icon: ExpressIcon },
  { name: "HTML5", Icon: HtmlIcon },
  { name: "CSS3", Icon: CssIcon },
  { name: "Git", Icon: GitIcon }
];

const TechStackSlider = () => {
  return (
    <div className="py-10 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
          Powered By Modern Technologies
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex space-x-12 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate large enough to cover screen */}
          {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              title={tech.name}
            >
              <tech.Icon className="h-12 w-12 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackSlider;
