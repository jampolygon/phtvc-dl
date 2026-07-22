import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_SLIDES = [
  { id: 'splash', src: '/splash.jpg' },
  { id: 'welcome1', src: '/welcome1.jpg' },
  { id: 'welcome2', src: '/welcome2.jpg' },
  { id: 'welcome3', src: '/welcome3.jpg' },
  { id: 'channels', src: '/channelspage.jpg' },
  { id: 'favorites', src: '/favoritespage.jpg' },
  { id: 'settings', src: '/settingspage.jpg' },
  { id: 'palette', src: '/livepalettechanger.jpg' },
];

export const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slide every 2.5 seconds (2500ms)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Lifted Mobile Phone Mockup Frame */}
      <div className="relative w-[260px] sm:w-[280px] md:w-[290px] lg:w-[300px] h-[520px] sm:h-[550px] md:h-[570px] lg:h-[590px] bg-slate-950 rounded-[44px] p-2.5 shadow-2xl shadow-purple-950/20 border-4 border-slate-800/80 ring-1 ring-white/10 select-none group">
        
        {/* Top Notch Cutout */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-center gap-1.5 pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
          <div className="w-1 h-1 rounded-full bg-indigo-900" />
        </div>

        {/* Previous Button Overlay */}
        <button
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-slate-900/90 text-white shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 hover:bg-slate-800 transition-all transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Next Button Overlay */}
        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-slate-900/90 text-white shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 hover:bg-slate-800 transition-all transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Screen Viewport with object-contain to display full screenshot */}
        <div className="relative w-full h-full bg-[#fff0f5] rounded-[34px] overflow-hidden flex flex-col justify-between">
          <div className="relative w-full h-full overflow-hidden">
            {CAROUSEL_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.src}
                  alt={`PHTVC Screen ${idx + 1}`}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
