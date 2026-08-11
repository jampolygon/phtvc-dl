import React from 'react';
import { X, MessageSquareHeart, Mail } from 'lucide-react';

export const DeveloperMessageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
              <MessageSquareHeart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                A Message from the Developer
              </h3>
              <p className="text-xs text-purple-700 font-semibold">
                July 26, 2026 • By jampolygon
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200/60 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close message"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable Text */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          <p className="font-bold text-slate-800 text-sm">Hello everyone,</p>

          <p>
            First of all, thank you sa lahat ng nag-download, nag-share, at sumuporta sa PHTVC.
          </p>

          <p>
            Honestly, hindi ko talaga in-expect na ganito kalaki yung mararating ng project na 'to. Akala ko around 100 people lang yung makakakita nito. Nagulat nalang ako na ang dami nang nag-share at gumagamit.
          </p>

          <p className="font-semibold text-slate-700">
            To be honest, passion project lang talaga ito.
          </p>

          <p>
            Ginawa ko ang PHTVC kasi almost 6 years na kaming walang TV sa bahay. Since then, naging full online na ako. Dumating sa point na hindi ko na alam kung anong mga shows ang pinapanood ng karamihan o kung ano yung mga live events na pinag-uusapan ng mga tao. Kaya naisip ko, <em>"What if gumawa nalang ako ng sariling app?"</em>
          </p>

          <p>Yun lang talaga yung dahilan.</p>

          <p>
            Habang ginagawa ko yung app, sobrang focus ko sa coding, pag-design ng UI, pag-aayos ng features, at pagpapaganda ng overall experience. Hindi ko talaga inisip kung gaano pala ka-complicated yung legal at licensing side ng IPTV.
          </p>

          <p>
            Pero nitong mga nakaraang araw, nag-research ako nang mas malalim. Doon ko na-realize na marami pa pala akong hindi alam at kailangan ko pang maintindihan bago ko maituloy nang maayos yung project.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-bold text-xs leading-snug">
            ⚠️ Kaya after thinking about it, PHTVC will enter indefinite maintenance mode after 3 days.
          </div>

          <p>
            Hindi ibig sabihin nito na tapos na ang PHTVC. Gusto ko lang muna huminto, mag-research, at pag-isipan kung ano yung pinakamagandang direction para sa app.
          </p>

          <p className="font-bold text-slate-800 pt-2">May isa pa akong gustong sabihin.</p>

          <p>
            Since papasok na sa maintenance mode ang app, ide-delete ko rin lahat ng PHTVC accounts at cloud data na naka-store sa Firebase. Kasama rito yung favorites, settings, at iba pang data ng app.
          </p>

          <p>
            Don't worry, hindi maaapektuhan ang Google account ninyo. Yung data ng PHTVC lang mismo ang ide-delete. Kung bumalik man ang app sa future, everyone will simply start fresh.
          </p>

          <p className="font-bold text-slate-900">I really hope this isn't goodbye.</p>

          <p>
            Marami pa akong gustong gawin sa PHTVC, pero gusto kong siguraduhin muna na tama yung direction na tatahakin ko.
          </p>

          <p>
            Kung gusto mong magbigay ng feedback, suggestions, o gusto mo lang makipag-usap tungkol sa project, feel free to email me at{' '}
            <a href="mailto:phtvc@proton.me" className="text-purple-600 font-bold underline">
              phtvc@proton.me
            </a>.
          </p>

          <p>Babasa ako ng lahat ng emails, kahit baka hindi ako agad makareply.</p>

          <p className="pt-2">Again, thank you sa lahat ng sumuporta sa maliit na passion project na ginawa ko.</p>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-bold text-slate-800">
            <span>See you soon.</span>
            <span className="text-purple-600 font-black">— jampolygon</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <a
            href="mailto:phtvc@proton.me?subject=PHTVC%20Developer%20Message%20Feedback"
            className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Feedback</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
