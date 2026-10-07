import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-150 py-10 bg-white text-neutral-500">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        {/* Left: Brand */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="font-semibold text-neutral-900">ABIRAJ K</span>
          <span>·</span>
          <span>Software Engineer</span>
        </div>

        {/* Center / Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={`mailto:${personalInfo.socialLinks.email}`}
            className="hover:text-neutral-900 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-neutral-400">
          © {new Date().getFullYear()} Abiraj K. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
