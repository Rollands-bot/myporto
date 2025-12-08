import React from 'react';

// Import local icons
import reactIcon from './icons/react.svg';
import nodeIcon from './icons/nodejs.svg';
import supabaseIcon from './icons/supabase.svg';
import jsIcon from './icons/javascript.svg';
import tailwindIcon from './icons/tailwindcss.svg';
import viteIcon from './icons/vite.svg';
import postgresIcon from './icons/postgresql.svg';
import expressIcon from './icons/express.svg';
import htmlIcon from './icons/html5.svg';
import cssIcon from './icons/css3.svg';
import gitIcon from './icons/git.svg';
import wordpressIcon from './icons/wordpress.svg';
import cloudflareIcon from './icons/cloudflare.svg';
import vercelIcon from './icons/vercel.svg';
import netlifyIcon from './icons/netlify.svg';
import dockerIcon from './icons/docker.svg';
import mysqlIcon from './icons/mysql.svg';

// Helper to render local images
const IconImg = ({ src, alt, ...props }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy"
    {...props} 
  />
);

export const ReactIcon = (props) => <IconImg src={reactIcon} alt="React" {...props} />;
export const NodeIcon = (props) => <IconImg src={nodeIcon} alt="Node.js" {...props} />;
export const SupabaseIcon = (props) => <IconImg src={supabaseIcon} alt="Supabase" {...props} />;
export const JsIcon = (props) => <IconImg src={jsIcon} alt="JavaScript" {...props} />;
export const TailwindIcon = (props) => <IconImg src={tailwindIcon} alt="Tailwind CSS" {...props} />;
export const ViteIcon = (props) => <IconImg src={viteIcon} alt="Vite" {...props} />;
export const PostgresIcon = (props) => <IconImg src={postgresIcon} alt="PostgreSQL" {...props} />;
export const ExpressIcon = (props) => <IconImg src={expressIcon} alt="Express" {...props} />;
export const HtmlIcon = (props) => <IconImg src={htmlIcon} alt="HTML5" {...props} />;
export const CssIcon = (props) => <IconImg src={cssIcon} alt="CSS3" {...props} />;
export const GitIcon = (props) => <IconImg src={gitIcon} alt="Git" {...props} />;
export const WordpressIcon = (props) => <IconImg src={wordpressIcon} alt="WordPress" {...props} />;
export const CloudflareIcon = (props) => <IconImg src={cloudflareIcon} alt="Cloudflare" {...props} />;
export const VercelIcon = (props) => <IconImg src={vercelIcon} alt="Vercel" {...props} />;
export const NetlifyIcon = (props) => <IconImg src={netlifyIcon} alt="Netlify" {...props} />;
export const DockerIcon = (props) => <IconImg src={dockerIcon} alt="Docker" {...props} />;
export const MysqlIcon = (props) => <IconImg src={mysqlIcon} alt="MySQL" {...props} />;
