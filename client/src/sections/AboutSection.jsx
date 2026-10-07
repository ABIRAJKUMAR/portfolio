import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 border-t border-neutral-150 bg-neutral-100/60">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">
              About
            </h2>
            <p className="text-sm text-neutral-400 mt-1 font-mono">
              Background & Focus
            </p>
          </div>

          {/* Right Column: Bio & Focus Areas */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              <p>
                I'm a Computer Science Engineering student at <span className="text-neutral-900 font-medium">Rathinam Technical Campus</span> passionate about building practical software and understanding how systems work at scale.
              </p>
              <p>
                My focus lies in building reliable backend architectures, robust RESTful APIs, cloud automation pipelines, and applying intelligent agentic workflows to solve real-world problems.
              </p>
            </div>

            {/* Focus Areas List */}
            <div className="pt-4 border-t border-neutral-200">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-4">
                Core Focus Areas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-neutral-700">
                {personalInfo.careerInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
