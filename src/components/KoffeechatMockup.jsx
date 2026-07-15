import React from 'react';

// A MacBook mockup whose screen renders a faithful, crisp reproduction of the
// Koffeechat "Coffee Chats" product page. Built as HTML/CSS (not a raster
// screenshot) so it stays sharp at any size and needs no image asset. The
// palette here intentionally uses Koffeechat's own green-on-cream brand — it's
// a product shot of Koffeechat, sitting inside Alttene's blue-themed site.

const shepherds = [
  {
    initials: 'TA',
    ring: 'bg-[#1f4b3f]',
    name: 'Tunde Adeyemi',
    role: 'Analyst · Access Holdings',
    step: '1 step ahead',
    blurb: 'Broke into IB straight from a Unilag degree — happy to review your modeling and CV.',
    slot: '2 slots this week',
  },
  {
    initials: 'ZM',
    ring: 'bg-[#7c5cff]',
    name: 'Zainab Mohammed',
    role: 'Associate · Stanbic IBTC',
    step: '2 steps ahead',
    blurb: 'Three years on the IB desk. Ask me about deal teams and surviving year one.',
    slot: 'Mentors weekly',
  },
];

// One shepherd card, reproduced from the Koffeechat gallery.
const ShepherdCard = ({ s }) => (
  <div className="rounded-xl border border-[#ece5da] bg-white p-3 shadow-sm">
    <div className="flex items-center gap-2.5">
      <div className={`flex h-9 w-9 items-center justify-center rounded-full ${s.ring} text-[10px] font-bold text-white`}>
        {s.initials}
      </div>
      <div className="min-w-0">
        <p className="truncate text-[11px] font-bold leading-tight text-[#12241d]">{s.name}</p>
        <p className="truncate text-[9px] leading-tight text-[#6b7b73]">{s.role}</p>
      </div>
    </div>
    <div className="mt-2 flex items-center gap-1.5">
      <span className="rounded-full bg-[#d7f0dd] px-2 py-0.5 text-[8px] font-semibold text-[#1f4b3f]">{s.step}</span>
      <span className="text-[8px] text-[#6b7b73]">🇳🇬 Lagos</span>
    </div>
    <p className="mt-2 text-[9px] leading-snug text-[#4b5a53] line-clamp-2">{s.blurb}</p>
    <div className="mt-2.5 flex items-center justify-between">
      <span className="text-[8px] text-[#8a988f]">{s.slot}</span>
      <span className="rounded-full bg-[#12352a] px-2.5 py-1 text-[8px] font-semibold text-white">Book chat ☕</span>
    </div>
  </div>
);

const KoffeechatMockup = () => {
  return (
    <div className="w-full">
      {/* Lid / screen */}
      <div className="relative mx-auto w-full rounded-t-[14px] border-[6px] border-[#3a3f47] bg-[#3a3f47] shadow-2xl">
        {/* Screen surface */}
        <div className="relative overflow-hidden rounded-[6px] bg-[#faf6f0]">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-[#ece5da] bg-[#f2ece3] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
            <div className="ml-3 flex-1">
              <div className="mx-auto w-full max-w-[240px] rounded-md bg-white px-3 py-1 text-center text-[9px] text-[#8a988f]">
                app.koffeechat.com/coffee-chats
              </div>
            </div>
          </div>

          {/* App top nav */}
          <div className="flex items-center justify-between border-b border-[#ece5da] px-4 py-2.5">
            <span className="text-[12px] font-extrabold tracking-tight text-[#12241d]">
              Koffee<span className="text-[#1f4b3f]">Chat</span>
            </span>
            <div className="hidden items-center gap-3 text-[9px] font-medium text-[#4b5a53] sm:flex">
              <span>Discover</span>
              <span>Companies</span>
              <span className="border-b-2 border-[#12352a] pb-0.5 font-semibold text-[#12241d]">Coffee Chats</span>
              <span>Grow</span>
              <span>Profile</span>
            </div>
            <span className="rounded-full bg-[#12352a] px-3 py-1 text-[9px] font-semibold text-white">Try for free</span>
          </div>

          {/* Page body */}
          <div className="px-4 py-4">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#2f7d5b]">
              The democratised &lsquo;uncle&rsquo; channel
            </p>
            <h3 className="mt-1 text-[19px] font-extrabold leading-tight tracking-tight text-[#12241d]">
              Talk to someone{' '}
              <span className="rounded-md bg-[#a7e0b5] px-1.5 py-0.5 text-[#0f2e22]">one step ahead.</span>
            </h3>
            <p className="mt-1.5 text-[9px] text-[#5a6a62]">
              Book an informal, 1-on-1 coffee chat with professionals who already walked your path.
            </p>

            {/* Controls row */}
            <div className="mt-3 flex items-center gap-1.5">
              <span className="rounded-md bg-[#12352a] px-2 py-1 text-[8px] font-semibold text-white">▦ Gallery</span>
              <span className="rounded-md border border-[#e0d8cc] bg-white px-2 py-1 text-[8px] text-[#4b5a53]">◍ Map</span>
              <span className="rounded-md border border-[#e0d8cc] bg-white px-2 py-1 text-[8px] text-[#4b5a53]">≡ Filters</span>
              <div className="flex-1 rounded-md border border-[#e0d8cc] bg-white px-2 py-1 text-[8px] text-[#a3b0a8]">
                Search by name, role or company…
              </div>
            </div>

            <p className="mt-3 text-[8px] font-semibold uppercase tracking-widest text-[#8a988f]">22 Shepherds</p>

            {/* Cards */}
            <div className="mt-2 grid grid-cols-2 gap-2.5">
              {shepherds.map((s) => (
                <ShepherdCard key={s.initials} s={s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Base / hinge */}
      <div className="relative mx-auto h-3 w-[112%] -translate-x-[5.4%] rounded-b-[12px] bg-gradient-to-b from-[#c8ccd2] to-[#9aa0a8] shadow-lg">
        <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-lg bg-[#7f858d]"></div>
      </div>
    </div>
  );
};

export default KoffeechatMockup;
