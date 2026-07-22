import React from 'react';

export const Header = () => {
  const logoUrl = `${import.meta.env.BASE_URL}tvicon.png`;

  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={logoUrl}
          alt="PHTVC Logo"
          className="w-9 h-9 object-contain drop-shadow-sm rounded-xl"
        />
        <div className="flex flex-col">
          <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
            PHTVC
          </span>
          <span className="text-xs font-medium text-slate-500 mt-1">
            Philippine TV Channels
          </span>
        </div>
      </div>
    </header>
  );
};
