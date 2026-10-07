import React from 'react';
import { educationData } from '../data/portfolioData';

export const EducationSection = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "System Design"
  ];

  return (
    <section id="education" className="py-20 border-t border-neutral-150 bg-neutral-100/60">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">
              Education
            </h2>
            <p className="text-sm text-neutral-400 mt-1 font-mono">
              Academic Background
            </p>
          </div>

          {/* Right Column: Clean Education Details */}
          <div className="md:col-span-8 space-y-6">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-medium text-neutral-900">
                  {educationData.institution}
                </h3>
                <span className="text-xs font-mono text-neutral-400">
                  {educationData.location}
                </span>
              </div>
              <p className="text-sm text-neutral-600 font-medium">
                {educationData.degree}
              </p>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                {educationData.status}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Key Coursework & Foundations
              </h4>
              <div className="text-sm text-neutral-700 leading-relaxed font-normal">
                {coursework.join('  ·  ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
