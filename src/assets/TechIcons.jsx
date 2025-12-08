import React from 'react';
// Importing icons from react-icons (SimpleIcons 'si', DevIcons 'di', FontAwesome 'fa')
// These are colored by default or take text color. We will apply colors via props or style.

import { 
  SiReact, SiNodedotjs, SiSupabase, SiJavascript, SiTailwindcss, 
  SiVite, SiPostgresql, SiExpress, SiHtml5, SiCss3, SiGit, 
  SiWordpress, SiCloudflare, SiVercel, SiNetlify, SiDocker, SiMysql 
} from 'react-icons/si';

// Wrapper to standardize size and add color
// We use the original brand colors for "nyata" look
const IconWrapper = ({ Icon, color, ...props }) => (
  <Icon {...props} style={{ color: color }} />
);

export const ReactIcon = (props) => <IconWrapper Icon={SiReact} color="#61DAFB" {...props} />;
export const NodeIcon = (props) => <IconWrapper Icon={SiNodedotjs} color="#339933" {...props} />;
export const SupabaseIcon = (props) => <IconWrapper Icon={SiSupabase} color="#3ECF8E" {...props} />;
export const JsIcon = (props) => <IconWrapper Icon={SiJavascript} color="#F7DF1E" {...props} />;
export const TailwindIcon = (props) => <IconWrapper Icon={SiTailwindcss} color="#06B6D4" {...props} />;
export const ViteIcon = (props) => <IconWrapper Icon={SiVite} color="#646CFF" {...props} />;
export const PostgresIcon = (props) => <IconWrapper Icon={SiPostgresql} color="#4169E1" {...props} />;
export const ExpressIcon = (props) => <IconWrapper Icon={SiExpress} color="#000000" {...props} />;
export const HtmlIcon = (props) => <IconWrapper Icon={SiHtml5} color="#E34F26" {...props} />;
export const CssIcon = (props) => <IconWrapper Icon={SiCss3} color="#1572B6" {...props} />;
export const GitIcon = (props) => <IconWrapper Icon={SiGit} color="#F05032" {...props} />;
export const WordpressIcon = (props) => <IconWrapper Icon={SiWordpress} color="#21759B" {...props} />;
export const CloudflareIcon = (props) => <IconWrapper Icon={SiCloudflare} color="#F38020" {...props} />;
export const VercelIcon = (props) => <IconWrapper Icon={SiVercel} color="#000000" {...props} />;
export const NetlifyIcon = (props) => <IconWrapper Icon={SiNetlify} color="#00C7B7" {...props} />;
export const DockerIcon = (props) => <IconWrapper Icon={SiDocker} color="#2496ED" {...props} />;
export const MysqlIcon = (props) => <IconWrapper Icon={SiMysql} color="#4479A1" {...props} />;
