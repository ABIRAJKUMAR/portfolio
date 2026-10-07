import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 border-t border-neutral-150 bg-neutral-100/60">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1 font-medium">
            Featured Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-2xl leading-relaxed">
            Selected software engineering projects across full-stack applications, developer platforms, and AI agent frameworks.
          </p>
        </div>

        {/* Projects List / Grid */}
        <div className="space-y-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 transition-all duration-200 shadow-card hover:shadow-card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-2 pt-1 md:pt-0">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="text-xs font-mono text-neutral-500 mb-5 pb-4 border-b border-neutral-100">
                <span className="text-neutral-400 font-semibold uppercase">Stack:</span>{' '}
                {project.techStack.join('  ·  ')}
              </div>

              {/* Key Highlights Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* View Full Architecture / Details Button */}
              <div className="mt-5 pt-3 flex justify-end">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors underline cursor-pointer"
                >
                  View architecture & details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
