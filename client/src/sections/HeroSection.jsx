import React from 'react';
import { ArrowDown, Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
            <span>Software Engineer</span>
            <span>·</span>
            <span>Backend · Cloud · AI</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.12]">
            Building reliable software and solving real-world problems.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-2xl font-normal">
            I’m a Computer Science Engineering student focused on backend development, cloud computing, AI, and problem solving.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToProjects}
              className="px-5 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm font-medium flex items-center gap-2 cursor-pointer shadow-subtle"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-md bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 transition-colors text-sm font-medium cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Social & Meta Links */}
          <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-5 text-xs text-neutral-500 font-medium">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToContact}
              className="hover:text-neutral-900 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <span className="text-neutral-300">|</span>

            <span className="text-neutral-400">
              Rathinam Technical Campus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
