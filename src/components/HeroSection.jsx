import React from 'react';
import { MobileCarousel } from './MobileCarousel';
import { QRCodeSVG } from 'qrcode.react';
import { Download, ShieldCheck, Smartphone, Cloud, Palette, RefreshCw, ShieldAlert } from 'lucide-react';

export const HeroSection = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const downloadUrl = `${baseUrl}PHTVC.apk`;
  
  // Direct HTTPS URL for QR Code scanning on mobile phone camera
  const fullDownloadUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${baseUrl}PHTVC.apk`
    : 'https://jampolygon.github.io/phtvc-dl/PHTVC.apk';

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 lg:py-4 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
      
      {/* LEFT COLUMN: HERO COPY & DOWNLOAD CTA */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-5">
        
        {/* Version Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-bold shadow-sm">
          <span>Version 1.0.1 Stable Released</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
          Download PHTVC
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
          Stream live Philippine TV anytime, anywhere. Discover your favorite channels, sync your watch history across devices, receive automatic in-app update alerts, customize themes, and enjoy a clean, fast streaming experience with no subscription required.
        </p>

        {/* Action Area: Material You Download APK + Inline Direct Scan QR Code */}
        <div className="w-full pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          
          {/* Download APK Button */}
          <div className="flex-1 flex flex-col gap-2.5">
            <a
              href={downloadUrl}
              download="PHTVC.apk"
              className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-full shadow-lg shadow-slate-900/15 flex items-center justify-center gap-3.5 transition-all hover:scale-[1.02] active:scale-[0.98] border border-slate-800"
            >
              <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-rose-400" />
              </div>

              <div className="text-left flex-1">
                <div className="text-[11px] font-medium text-slate-300 flex items-center justify-between">
                  <span>Direct APK</span>
                  <span className="text-[10px] px-2 py-0.5 bg-rose-500/20 text-rose-300 font-mono rounded-full font-bold">
                    v1.0.1 • ~49.9 MB
                  </span>
                </div>
                <div className="text-base font-black tracking-tight text-white">
                  Download APK
                </div>
              </div>
            </a>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 px-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Safe and Secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-rose-600" />
                <span>Android 10+ Compatible</span>
              </div>
            </div>
          </div>

          {/* Inline Scannable Direct APK QR Code */}
          <div className="p-3.5 bg-white rounded-3xl border border-slate-200 shadow-md flex flex-col items-center justify-center flex-shrink-0">
            <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
              <QRCodeSVG
                value={fullDownloadUrl}
                size={110}
                level="M"
                includeMargin={false}
              />
            </div>
            <span className="text-[10px] font-extrabold text-slate-600 mt-1.5 tracking-tight">
              Scan to Download
            </span>
          </div>

        </div>

        {/* Google Play Protect Advice Card */}
        <div className="w-full p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex flex-col gap-1 text-xs text-amber-950 shadow-sm">
          <div className="flex items-center gap-2 font-extrabold text-amber-900">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Note on Google Play Protect</span>
          </div>
          <p className="text-[11px] text-amber-900/80 font-medium leading-relaxed pl-6">
            Since PHTVC is installed directly via APK outside the Google Play Store, Android Play Protect may display a prompt during setup. Simply tap <strong className="text-amber-950 font-bold">"Install Anyway"</strong> to proceed.
          </p>
        </div>

        {/* Feature Badges List */}
        <div className="w-full pt-4 space-y-2.5 border-t border-slate-200/70">
          <div className="p-3 rounded-2xl bg-indigo-50/80 border border-indigo-100/90 flex items-center gap-3 text-xs font-bold text-indigo-950">
            <div className="p-1.5 rounded-xl bg-indigo-200/60 text-indigo-700 flex-shrink-0">
              <RefreshCw className="w-4 h-4" />
            </div>
            <span>In-App Update Checker & Built-in Changelogs History</span>
          </div>

          <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-100/90 flex items-center gap-3 text-xs font-bold text-purple-950">
            <div className="p-1.5 rounded-xl bg-purple-200/60 text-purple-700 flex-shrink-0">
              <Cloud className="w-4 h-4" />
            </div>
            <span>Cloud Sync Favorites and Palette Settings to Other Phones</span>
          </div>

          <div className="p-3 rounded-2xl bg-pink-50/80 border border-pink-100/90 flex items-center gap-3 text-xs font-bold text-pink-950">
            <div className="p-1.5 rounded-xl bg-pink-200/60 text-pink-700 flex-shrink-0">
              <Palette className="w-4 h-4" />
            </div>
            <span>9 Palette Themes + Live Custom Palette Changer</span>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: MOBILE FRAME CAROUSEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-purple-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <MobileCarousel />
      </div>

    </section>
  );
};
