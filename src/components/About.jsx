import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import {
  ReactIcon, NodeIcon, LaravelIcon, GolangIcon, ThreeJsIcon,
  PostgresIcon, MysqlIcon, SupabaseIcon, DockerIcon, AwsIcon,
  N8nIcon, AnthropicIcon, OpenaiIcon, MetaIcon
} from '../assets/TechIcons';

// Core stack aligned with the CV skill set (full list lives in the tech slider)
const coreStack = [
  { name: 'React', Icon: ReactIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'Laravel', Icon: LaravelIcon },
  { name: 'Golang', Icon: GolangIcon },
  { name: 'Three.js', Icon: ThreeJsIcon },
  { name: 'PostgreSQL', Icon: PostgresIcon },
  { name: 'MySQL', Icon: MysqlIcon },
  { name: 'Supabase', Icon: SupabaseIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'AWS', Icon: AwsIcon },
  { name: 'n8n', Icon: N8nIcon },
  { name: 'Anthropic', Icon: AnthropicIcon },
  { name: 'OpenAI', Icon: OpenaiIcon },
  { name: 'Meta API', Icon: MetaIcon },
];

const CERTIFICATIONS = [
  { name: 'Google AI — Data Analysis, Content & Research', year: '2026' },
  { name: 'MySkill — AI & Automation (n8n, LLM)', year: '2025' },
  { name: 'Dicoding — Web Programming', year: '2023' },
  { name: 'DEWAWEB — Cloud Hosting', year: '2021' },
];

const EXPERIENCE = [
  {
    role: 'AI Specialist',
    company: 'PT Aneka Gading Serpong (Holywings Group) · Tangerang',
    period: 'Apr 2026 – Present',
    current: true,
    summary:
      'Building AI chatbots and an omnichannel CRM across Meta (WhatsApp & Instagram), TikTok & YouTube — one dashboard powering customer service for 200+ agents across hundreds of outlets, with agentic intent routing.',
    highlights: ['70% ops cost saved', '85% auto-resolved', 'CSAT 78% → 92%'],
  },
  {
    role: 'Founder & Platform Developer',
    company: 'Clipink.id · Remote',
    period: 'Dec 2025 – Present',
    current: true,
    summary:
      'Founded a video clipping platform that automatically extracts, clips and distributes short-form content from live streams to TikTok, Reels & Shorts — with AI highlight detection. Built on Golang & React.',
    highlights: ['50+ active creators', '1M+ views/month', 'Editing 3h → 45min'],
  },
  {
    role: 'Fullstack Software Engineer',
    company: 'Wearebrand · Bordeaux, France (Remote)',
    period: 'Apr 2026 – Jun 2026 · Part-time',
    summary:
      'Interactive Three.js / React Three Fiber web campaigns for European fashion & lifestyle brands, backed by a Laravel CMS and zero-downtime CI/CD.',
    highlights: ['+40% engagement', 'Load time 5s → 1.8s'],
  },
  {
    role: 'Fullstack Software Engineer',
    company: 'PT Cipta Kesehatan Mandiri (RS Keluarga Kita) · Tangerang',
    period: 'Jan 2026 – Mar 2026 · Part-time',
    summary:
      'Hospital ERP on Laravel serving 500+ daily medical staff, with 15+ REST APIs for BPJS, pharmacy and laboratory integrations.',
    highlights: ['99.9% availability', 'API latency −25%'],
  },
  {
    role: 'Fullstack Software Engineer',
    company: 'PT Pelatihan Profit Internasional · Tangerang',
    period: 'Jan 2025 – Jan 2026 · Hybrid',
    summary:
      '20+ React UI components, MySQL design for 10,000+ monthly transactions, Midtrans/Xendit payment integration — while mentoring 2 junior developers.',
    highlights: ['+15% platform sales', '0 critical bugs'],
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Rocket Digital Academy · Jakarta (Remote)',
    period: 'Sep 2025 – Nov 2025',
    summary:
      'Data-driven SEO and paid campaigns on Google Ads & Meta, with landing page funnel optimization and A/B testing.',
    highlights: ['+50% organic traffic', 'CPA −12%'],
  },
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
              For 6+ years I've built end-to-end platforms — <span className="bg-brand-orange/10 text-brand-orange px-1">ERP, POS, HRIS</span> — and
              integrated third-party systems via REST APIs. Teams bring me in when they need to move from MVP to scale without breaking production or burning runway.
            </p>
            <p>
              Today my focus is <span className="bg-brand-orange/10 text-brand-orange px-1">agentic AI &amp; LLM orchestration</span>: chatbots and omnichannel
              CRM wired into the Meta ecosystem, TikTok and YouTube that resolve 85% of inquiries automatically — cutting operational costs by 70% while lifting customer satisfaction.
            </p>
            <p>
              What makes it stick is reliability — 99.9% availability, zero-downtime deploys, and systems designed around how the business actually operates.
              I bridge technical execution with business needs, in fast-paced environments.
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

          {/* Certifications */}
          <div className="mt-10">
             <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Certifications</h3>
             <ul className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.name} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <span className="p-1.5 bg-white border border-gray-200 rounded-lg text-brand-orange shadow-sm shrink-0">
                      <Award size={14} />
                    </span>
                    <span>{cert.name}</span>
                    <span className="ml-auto font-mono text-xs text-gray-400">{cert.year}</span>
                  </li>
                ))}
             </ul>
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
             {EXPERIENCE.map((job, i) => (
               <motion.div
                 key={`${job.role}-${job.company}`}
                 className="relative"
                 initial={{ opacity: 0, y: 16 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.08, duration: 0.5 }}
               >
                  <div className={`absolute -left-[37px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm ${job.current ? 'bg-brand-orange' : 'bg-gray-300'}`}></div>
                  <h3 className="text-xl font-bold text-dark">{job.role}</h3>
                  <p className="text-gray-500 mb-2 font-medium">{job.company}</p>
                  <p className="text-sm text-gray-400 font-mono mb-3">
                    {job.period}
                    {job.current && (
                      <span className="ml-2 inline-flex items-center gap-1.5 text-brand-orange font-bold text-xs uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></span>
                        Now
                      </span>
                    )}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{job.summary}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.highlights.map((metric) => (
                      <span key={metric} className="font-mono text-xs font-semibold text-brand-orange bg-brand-orange/5 border border-brand-orange/20 rounded-full px-2.5 py-1">
                        {metric}
                      </span>
                    ))}
                  </div>
               </motion.div>
             ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
