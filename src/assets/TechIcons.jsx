import React from 'react';

// Helper to render original logos as images
const IconImg = ({ src, alt, ...props }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy"
    {...props} 
  />
);

export const ReactIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" {...props} />;
export const NodeIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" {...props} />;
export const SupabaseIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" {...props} />;
export const JsIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" {...props} />;
export const TailwindIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" {...props} />;
export const ViteIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" {...props} />;
export const PostgresIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" {...props} />;
export const ExpressIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" {...props} />;
export const HtmlIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" {...props} />;
export const CssIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" {...props} />;
export const GitIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" {...props} />;
export const WordpressIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" {...props} />;
export const CloudflareIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare" {...props} />;
export const VercelIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" {...props} />;
export const NetlifyIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" {...props} />;
export const DockerIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" {...props} />;
export const MysqlIcon = (props) => <IconImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" {...props} />;
