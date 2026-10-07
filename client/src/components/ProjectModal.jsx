import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Check } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Subtle Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Clean Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-lg border border-neutral-200 bg-white shadow-card-hover p-6 sm:p-8 z-10 overflow-hidden text-neutral-900 max-h-[90vh] overflow-y-auto animate-in fade-in duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Info */}
        <div className="mb-6 pr-8">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            {project.category}
          </div>
          <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            {project.tagline}
          </p>
        </div>

        {/* Overview */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Overview
          </h4>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Key Capabilities
            </h4>
            <div className="space-y-1.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2">
            Tech Stack
          </h4>
          <div className="text-xs font-mono text-neutral-600">
            {project.techStack.join('  ·  ')}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-neutral-150">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md font-medium text-xs text-neutral-700 bg-white hover:bg-neutral-50 transition-colors border border-neutral-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md font-medium text-xs text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
