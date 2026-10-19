import React from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

// Pointer position over the card, 0..1 on each axis; 0.5 is the resting centre.
const SPRING = { stiffness: 140, damping: 16, mass: 0.6 };

const TiltPortrait = ({ src, alt }) => {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);

  const rotateY = useTransform(sx, [0, 1], [-14, 14]);
  const rotateX = useTransform(sy, [0, 1], [10, -10]);
  // The photo drifts against the tilt, so it reads as sitting behind glass.
  const photoX = useTransform(sx, [0, 1], [10, -10]);
  const photoY = useTransform(sy, [0, 1], [10, -10]);
  const glareX = useTransform(sx, [0, 1], ['0%', '100%']);
  const glareY = useTransform(sy, [0, 1], ['0%', '100%']);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%)`;

  const onPointerMove = (e) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className="relative lg:-mt-16" style={{ perspective: 1000 }}>
      <motion.div
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85, rotateZ: -6, filter: 'blur(14px)' }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative group"
      >
        {/* Orange halo that wakes up on hover */}
        <div
          className="absolute -inset-6 rounded-full bg-brand-orange/30 blur-3xl opacity-40 group-hover:opacity-90 transition-opacity duration-500"
          style={{ transform: 'translateZ(-60px)' }}
        />

        {/* Unique Blob Shape Mask using border-radius */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 overflow-hidden border-4 border-white shadow-2xl transition-[border-radius] duration-700 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] group-hover:rounded-[40%_60%_70%_30%/40%_50%_60%_50%]">
          <motion.img
            src={src}
            alt={alt}
            style={{ x: photoX, y: photoY }}
            className="w-full h-full object-cover scale-110"
          />
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
            style={{ background: glare }}
          />
        </div>

        {/* Floating Badge, lifted off the card so it parallaxes against the photo */}
        <div className="absolute -bottom-4 -left-4" style={{ transform: 'translateZ(60px)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="bg-green-100 p-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Status</p>
              <p className="text-sm font-bold text-dark">Available for Hire</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltPortrait;
