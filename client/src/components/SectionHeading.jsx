import React from 'react';

export const SectionHeading = ({ tag, title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-10 sm:mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {tag && (
        <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-medium">
          {tag}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-neutral-500 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
