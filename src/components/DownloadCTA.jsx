import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const PlayStoreIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M3 2.112v19.776L16.273 12 3 2.112zM17.653 10.974l-2.074-1.543-1.428 1.428 1.428 1.428 2.074-1.543c.732-.544.732-1.226 0-1.77zM4.61 1.706C4.161 1.373 3.5 1.638 3.5 2.222v19.556c0 .584.661.849 1.11.516L18.49 13.43c.484-.36.484-1.077 0-1.437L4.61 1.706z" />
    <path d="M4.61 1.706L14.15 8.79l-14.15-10.496C4.161 1.373 3.5 1.638 3.5 2.222v19.556c0 .584.661.849 1.11.516L18.49 13.43c.484-.36.484-1.077 0-1.437L4.61 1.706z" fill="#000000" fillOpacity="0" />
  </svg>
);

export default function DownloadCTA() {
  return (
    <div className="relative group inline-block">
      {/* Soft glowing effect behind the button */}
      <motion.div
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] opacity-50 blur-lg transition duration-500 group-hover:opacity-100 group-hover:blur-xl"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* The main button */}
      <motion.a
        href="/Gigiman_userapp.apk"
        download="Gigiman_userapp.apk"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white font-semibold text-lg shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_12px_25px_rgba(6,182,212,0.5)] transition-all duration-300 z-10 overflow-hidden cursor-pointer"
      >
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        
        <PlayStoreIcon className="w-6 h-6" />
        <span className="tracking-wide">Download Gigiman App</span>
        <Download className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:-translate-y-1" />
      </motion.a>
    </div>
  );
}
