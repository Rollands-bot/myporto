import React from 'react';

// Using skillicons.dev as a robust alternative.
// It serves optimized SVGs for technical skills.
const IconImg = ({ name, alt, ...props }) => (
  <img 
    src={`https://skillicons.dev/icons?i=${name}`}
    alt={alt} 
    loading="lazy"
    {...props} 
  />
);

export const ReactIcon = (props) => <IconImg name="react" alt="React" {...props} />;
export const NodeIcon = (props) => <IconImg name="nodejs" alt="Node.js" {...props} />;
export const SupabaseIcon = (props) => <IconImg name="supabase" alt="Supabase" {...props} />;
export const JsIcon = (props) => <IconImg name="js" alt="JavaScript" {...props} />;
export const TailwindIcon = (props) => <IconImg name="tailwind" alt="Tailwind CSS" {...props} />;
export const ViteIcon = (props) => <IconImg name="vite" alt="Vite" {...props} />;
export const PostgresIcon = (props) => <IconImg name="postgres" alt="PostgreSQL" {...props} />;
export const ExpressIcon = (props) => <IconImg name="express" alt="Express" {...props} />;
export const HtmlIcon = (props) => <IconImg name="html" alt="HTML5" {...props} />;
export const CssIcon = (props) => <IconImg name="css" alt="CSS3" {...props} />;
export const GitIcon = (props) => <IconImg name="git" alt="Git" {...props} />;
export const WordpressIcon = (props) => <IconImg name="wordpress" alt="WordPress" {...props} />;
export const CloudflareIcon = (props) => <IconImg name="cloudflare" alt="Cloudflare" {...props} />;
export const VercelIcon = (props) => <IconImg name="vercel" alt="Vercel" {...props} />;
export const NetlifyIcon = (props) => <IconImg name="netlify" alt="Netlify" {...props} />;
export const DockerIcon = (props) => <IconImg name="docker" alt="Docker" {...props} />;
export const MysqlIcon = (props) => <IconImg name="mysql" alt="MySQL" {...props} />;
