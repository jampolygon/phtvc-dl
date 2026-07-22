import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { NotificationToast } from './components/NotificationToast';

export default function App() {
  const logoUrl = `${import.meta.env.BASE_URL}tvicon.png`;

  return (
    <div className="min-h-screen w-full bg-[#f7f7f9] text-slate-800 flex flex-col justify-between selection:bg-purple-600 selection:text-white font-sans relative">
      <NotificationToast />
      <div>
        <Header />
        <main>
          <HeroSection />
        </main>
      </div>

      {/* Author Footer (Always 100% visible at the bottom center) */}
      <footer className="w-full border-t border-slate-200/80 bg-white/95 backdrop-blur-sm py-2.5 mt-auto z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          
          {/* Left Brand */}
          <div className="flex items-center gap-2 opacity-80">
            <img src={logoUrl} alt="PHTVC Logo" className="w-4 h-4 object-contain" />
            <span className="font-bold text-slate-800">PHTVC</span>
            <span>•</span>
            <span>Philippine TV Channels</span>
          </div>

          {/* Center Author Name & Social Links */}
          <div className="flex items-center gap-2.5 text-slate-700 font-semibold opacity-85 hover:opacity-100 transition-opacity">
            <span className="font-bold text-slate-900">JP Canoy</span>
            <span className="text-slate-400">•</span>
            
            {/* Portfolio Icon Link */}
            <a
              href="https://jampolygon.github.io/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 transition-colors"
              title="Portfolio"
              aria-label="Portfolio"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>

            {/* Facebook Icon Link */}
            <a
              href="https://www.facebook.com/jampolygon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* LinkedIn Icon Link */}
            <a
              href="https://www.linkedin.com/in/jampolygon/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-sky-600 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.241-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Right Copyright */}
          <div className="text-slate-400 text-[11px] opacity-75">
            © {new Date().getFullYear()} PHTVC
          </div>

        </div>
      </footer>
    </div>
  );
}
