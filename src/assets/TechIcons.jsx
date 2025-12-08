import React from 'react';

// Using absolute paths from public folder (Vite standard)
// These files are now in /public/assets/icons/
const getIconPath = (name) => `/assets/icons/${name}.svg`;

const IconImg = ({ name, alt, ...props }) => (
  <img 
    src={getIconPath(name)}
    alt={alt} 
    loading="lazy"
    {...props} 
    onError={(e) => {
      console.error(`Failed to load icon: ${name}`);
      // e.target.style.display = 'none'; 
    }}
  />
);

export const ReactIcon = (props) => <IconImg name="react" alt="React" {...props} />;
export const NodeIcon = (props) => <IconImg name="nodejs" alt="Node.js" {...props} />;
export const SupabaseIcon = (props) => <IconImg name="supabase" alt="Supabase" {...props} />;
export const JsIcon = (props) => <IconImg name="javascript" alt="JavaScript" {...props} />;
export const TailwindIcon = (props) => <IconImg name="tailwindcss" alt="Tailwind CSS" {...props} />;
export const ViteIcon = (props) => <IconImg name="vite" alt="Vite" {...props} />;
export const PostgresIcon = (props) => <IconImg name="postgresql" alt="PostgreSQL" {...props} />;
export const ExpressIcon = (props) => <IconImg name="express" alt="Express" {...props} />;
export const HtmlIcon = (props) => <IconImg name="html5" alt="HTML5" {...props} />;
export const CssIcon = (props) => <IconImg name="css3" alt="CSS3" {...props} />;
export const GitIcon = (props) => <IconImg name="git" alt="Git" {...props} />;
export const WordpressIcon = (props) => <IconImg name="wordpress" alt="WordPress" {...props} />;
export const CloudflareIcon = (props) => <IconImg name="cloudflare" alt="Cloudflare" {...props} />;
export const VercelIcon = (props) => <IconImg name="vercel" alt="Vercel" {...props} />;
export const NetlifyIcon = (props) => <IconImg name="netlify" alt="Netlify" {...props} />;
export const DockerIcon = (props) => <IconImg name="docker" alt="Docker" {...props} />;
export const MysqlIcon = (props) => <IconImg name="mysql" alt="MySQL" {...props} />;
