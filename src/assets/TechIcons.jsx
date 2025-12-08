import React from 'react';

// Using raw.githubusercontent.com for more reliable direct access
// Fallback to simpleicons for newer ones if needed
const BASE_URL = "https://raw.githubusercontent.com/devicons/devicon/master/icons";

const IconImg = ({ src, alt, ...props }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy"
    {...props} 
    onError={(e) => {
      // Fallback if the specific devicon path fails (e.g. for newer tools)
      // Try fetching from skillicons as backup
      console.warn(`Failed to load icon: ${alt}`);
      e.target.style.display = 'none'; // Hide broken image so alt text doesn't look ugly or handle gracefully
      // e.target.src = `https://skillicons.dev/icons?i=${alt.toLowerCase()}`; // Optional fallback strategy
    }}
  />
);

export const ReactIcon = (props) => <IconImg src={`${BASE_URL}/react/react-original.svg`} alt="React" {...props} />;
export const NodeIcon = (props) => <IconImg src={`${BASE_URL}/nodejs/nodejs-original.svg`} alt="Node.js" {...props} />;
export const SupabaseIcon = (props) => <IconImg src={`${BASE_URL}/supabase/supabase-original.svg`} alt="Supabase" {...props} />;
export const JsIcon = (props) => <IconImg src={`${BASE_URL}/javascript/javascript-original.svg`} alt="JavaScript" {...props} />;
export const TailwindIcon = (props) => <IconImg src={`${BASE_URL}/tailwindcss/tailwindcss-original.svg`} alt="Tailwind CSS" {...props} />;
export const ViteIcon = (props) => <IconImg src={`${BASE_URL}/vitejs/vitejs-original.svg`} alt="Vite" {...props} />;
export const PostgresIcon = (props) => <IconImg src={`${BASE_URL}/postgresql/postgresql-original.svg`} alt="PostgreSQL" {...props} />;
export const ExpressIcon = (props) => <IconImg src={`${BASE_URL}/express/express-original.svg`} alt="Express" {...props} />;
export const HtmlIcon = (props) => <IconImg src={`${BASE_URL}/html5/html5-original.svg`} alt="HTML5" {...props} />;
export const CssIcon = (props) => <IconImg src={`${BASE_URL}/css3/css3-original.svg`} alt="CSS3" {...props} />;
export const GitIcon = (props) => <IconImg src={`${BASE_URL}/git/git-original.svg`} alt="Git" {...props} />;
export const WordpressIcon = (props) => <IconImg src={`${BASE_URL}/wordpress/wordpress-plain.svg`} alt="WordPress" {...props} />;
export const CloudflareIcon = (props) => <IconImg src={`${BASE_URL}/cloudflare/cloudflare-original.svg`} alt="Cloudflare" {...props} />;
// Vercel might be missing in older devicon, using a specific reliable SVG from simpleicons if needed, but trying devicon first
export const VercelIcon = (props) => <IconImg src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="Vercel" {...props} />;
export const NetlifyIcon = (props) => <IconImg src={`${BASE_URL}/netlify/netlify-original.svg`} alt="Netlify" {...props} />;
export const DockerIcon = (props) => <IconImg src={`${BASE_URL}/docker/docker-original.svg`} alt="Docker" {...props} />;
export const MysqlIcon = (props) => <IconImg src={`${BASE_URL}/mysql/mysql-original.svg`} alt="MySQL" {...props} />;
