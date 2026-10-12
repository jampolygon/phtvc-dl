import React from 'react';

export default function App() {
  const logoUrl = `${import.meta.env.BASE_URL}tvicon.png`;

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#f7f7f9] text-slate-800 selection:bg-purple-600 selection:text-white">
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-10">
        <article className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 text-center">
          <img
            src={logoUrl}
            alt="PHTVC logo"
            className="w-20 h-20 object-contain rounded-2xl mx-auto drop-shadow-sm"
          />

          <p className="mt-6 inline-block px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold">
            PHTVC has been discontinued
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Thank you for supporting PHTVC
          </h1>

          <div className="mt-5 space-y-3 text-slate-600 text-base leading-relaxed font-medium">
            <p>
              Thank you to everyone who downloaded, used and shared PHTVC.
            </p>
            <p>
              Unfortunately, I have decided to discontinue PHTVC and shut it down for good.
              Downloads are no longer available, and there will be no further updates or support.
            </p>
            <p>
              Thank you again for being part of this little project.
            </p>
          </div>

          <p className="mt-6 text-slate-900 font-bold">— jampolygon</p>
        </article>
      </main>

      <footer className="w-full py-5 px-4 text-center text-xs text-slate-500">
        <a
          href="https://jampolygon-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-700 underline hover:text-rose-600"
        >
          Made by jampolygon
        </a>
      </footer>
    </div>
  );
}
