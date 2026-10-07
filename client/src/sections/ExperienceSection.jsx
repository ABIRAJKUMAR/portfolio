import React from 'react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 border-t border-neutral-150">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">
              Experience
            </h2>
            <p className="text-sm text-neutral-400 mt-1 font-mono">
              Milestones & Projects
            </p>
          </div>

          {/* Right Column: Clean Chronological List */}
          <div className="md:col-span-8 space-y-8">
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                className="pb-6 border-b border-neutral-150 last:border-0 last:pb-0 space-y-2"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-medium text-neutral-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-mono text-neutral-500">
                  {item.organization} · {item.badge}
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
