import React from 'react';
import { Check, AlertCircle, X } from 'lucide-react';

export const Toast = ({ type = 'success', message, onClose }) => {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200 bg-white shadow-card-hover text-neutral-900">
        <div className="mt-0.5 shrink-0">
          {isSuccess ? (
            <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center">
              <Check className="w-3 h-3" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center">
              <AlertCircle className="w-3 h-3" />
            </div>
          )}
        </div>

        <div className="text-sm text-neutral-700 leading-snug pr-2">
          {message}
        </div>

        <button
          onClick={onClose}
          className="ml-auto p-1 text-neutral-400 hover:text-neutral-900 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
