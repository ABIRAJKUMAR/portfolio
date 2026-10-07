import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      items: ["Java", "JavaScript", "Python"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "Supabase", "MongoDB", "MySQL"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Git", "GitHub", "Linux", "Jenkins", "Ansible", "Terraform"]
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Computer Science Core",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-neutral-150">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">
              Skills
            </h2>
            <p className="text-sm text-neutral-400 mt-1 font-mono">
              Technologies & Tools
            </p>
          </div>

          {/* Right Column: Clean Categorized Rows */}
          <div className="md:col-span-8 space-y-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="pb-5 border-b border-neutral-150 last:border-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
              >
                <span className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider w-44 shrink-0">
                  {cat.category}
                </span>
                <span className="text-sm sm:text-base text-neutral-800 font-normal leading-relaxed">
                  {cat.items.join('  ·  ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
