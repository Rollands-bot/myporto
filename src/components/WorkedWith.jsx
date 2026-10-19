import React from 'react';
import { motion } from 'framer-motion';

// Logos live in public/assets/logos, trimmed to transparent 160px-tall WebP.
// Marks that are only a symbol get the company name beside them; wordmarks stand alone.
const COMPANIES = [
  // Gold foil turns pale grey under grayscale; darken it so the biggest client still reads.
  { name: 'Holywings Group', logo: 'holywings', label: 'Holywings Group', idle: 'brightness-50 contrast-150 group-hover:brightness-100 group-hover:contrast-100' },
  { name: 'Wearebrand', logo: 'wearebrand', label: 'wearebrand', height: 'h-6 md:h-7' },
  { name: 'RS Keluarga Kita', logo: 'rskk', height: 'h-8 md:h-9' },
  { name: 'Noorah Fragrances', logo: 'noorah', height: 'h-8 md:h-9' },
  { name: 'Clipink', logo: 'clipink', label: 'clipink' },
  { name: 'PT Pelatihan Profit Internasional', logo: 'ppti', label: 'PT PPI' },
];

const WorkedWith = () => (
  <section aria-label="Companies I have worked with" className="py-12 container-padding bg-white border-b border-gray-100">
    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 text-center">Worked with</p>
    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
      {COMPANIES.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          title={c.name}
          className="group flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          <img
            src={`/assets/logos/${c.logo}.webp`}
            alt={c.label ? '' : c.name}
            loading="lazy"
            className={`${c.height ?? 'h-9 md:h-10'} w-auto transition-[filter] duration-300 ${c.idle ?? ''}`}
          />
          {c.label && <span className="text-lg md:text-xl font-extrabold tracking-tight text-dark">{c.label}</span>}
        </motion.div>
      ))}
    </div>
  </section>
);

export default WorkedWith;
