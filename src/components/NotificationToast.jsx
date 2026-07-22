import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const NotificationToast = () => {
  const [animationState, setAnimationState] = useState('entering'); // 'entering' | 'visible' | 'exiting' | 'hidden'

  useEffect(() => {
    // 1. Ease in from offscreen right to left
    const enterTimer = setTimeout(() => {
      setAnimationState('visible');
    }, 50);

    // 2. Auto ease out after 4 seconds
    const exitTimer = setTimeout(() => {
      handleDismiss();
    }, 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const handleDismiss = () => {
    setAnimationState('exiting');
    setTimeout(() => {
      setAnimationState('hidden');
    }, 500);
  };

  if (animationState === 'hidden') return null;

  const isVisible = animationState === 'visible';

  return (
    <div
      className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 max-w-sm w-full transform transition-all duration-500 ease-in-out ${
        isVisible
          ? 'translate-x-0 opacity-100 pointer-events-auto'
          : 'translate-x-[120%] opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-purple-200/80 shadow-2xl shadow-purple-900/15 rounded-3xl p-4 sm:p-4.5 relative text-slate-800 flex flex-col gap-2">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Material You Pill Tag */}
          <div className="px-3 py-1 bg-purple-600 text-white text-[11px] font-extrabold rounded-full shadow-sm shadow-purple-600/30">
            New Release v1.0.1
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
            title="Dismiss notification"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Notification Body */}
        <div className="text-left space-y-1">
          <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
            PHTVC Version 1.0.1 is live!
          </h4>
          <p className="text-xs text-slate-600 font-medium leading-snug">
            Featuring In-App Updates checker, built-in Changelogs, Play Protect guide, and performance fixes.
          </p>
        </div>

      </div>
    </div>
  );
};
