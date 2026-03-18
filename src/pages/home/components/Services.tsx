import { useEffect, useRef, useState } from 'react';

const qualities = [
  {
    icon: 'ri-award-fill',
    title: 'Grădiniță autorizată',
    desc: 'Acreditată conform normelor Ministerului Educației.',
    color: '#C96B45',
    num: '01',
  },
  {
    icon: 'ri-user-star-fill',
    title: 'Personal calificat',
    desc: 'Educatoare cu experiență, formare continuă și dedicare.',
    color: '#D4A041',
    num: '02',
  },
  {
    icon: 'ri-group-fill',
    title: 'Număr redus de copii',
    desc: 'Atenție individualizată, ritm propriu, progres real.',
    color: '#6B8B6E',
    num: '03',
  },
  {
    icon: 'ri-global-fill',
    title: 'Predare bilingvă',
    desc: 'Română–engleză integrată natural în fiecare zi.',
    color: '#4A9E9B',
    num: '04',
  },
  {
    icon: 'ri-heart-pulse-fill',
    title: 'Asistență medicală',
    desc: 'Medic și asistentă prezente la nevoie, sănătate prioritară.',
    color: '#C96B45',
    num: '05',
  },
  {
    icon: 'ri-restaurant-fill',
    title: 'Bucătărie proprie',
    desc: 'Meniu gătit zilnic în incintă, fără conservanți.',
    color: '#D4A041',
    num: '06',
  },
  {
    icon: 'ri-tree-fill',
    title: 'Loc de joacă exterior',
    desc: 'Spațiu verde și aer liber în fiecare zi de vreme bună.',
    color: '#6B8B6E',
    num: '07',
  },
  {
    icon: 'ri-message-3-fill',
    title: 'Comunicare permanentă',
    desc: 'Zilnic cu familia. Raport săptămânal. Transparență totală.',
    color: '#4A9E9B',
    num: '08',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.10 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicii"
      className="relative overflow-hidden"
      style={{ background: '#1C1612' }}
    >
      {/* Top rainbow line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 z-10"
        style={{
          background: 'linear-gradient(90deg, #C96B45, #D4A041, #6B8B6E, #4A9E9B, #C96B45)',
        }}
      />

      {/* Faint bg classroom image */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <img
          src="/images/services-bg-v5.webp"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,107,69,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(74,158,155,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-28 md:pt-32 md:pb-36">

        {/* ── Editorial Header ────────────────────────── */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10" style={{ background: 'rgba(201,107,69,0.6)' }} />
            <span
              className="chapter-label tracking-[0.2em]"
              style={{ color: 'rgba(229,162,133,0.8)' }}
            >
              Calitate educațională
            </span>
          </div>

          {/* Giant split headline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end">
            <div>
              <div
                className="font-serif font-bold leading-[0.95] mb-0"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  color: 'rgba(250,248,244,0.95)',
                  letterSpacing: '-0.03em',
                }}
              >
                Educație
              </div>
              <div
                className="font-serif font-bold italic leading-[0.95]"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #F2C8B4 0%, #E8C365 50%, #BDD3BF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                de calitate.
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-2">
              <p
                className="font-body text-base md:text-lg leading-relaxed max-w-sm"
                style={{ color: 'rgba(250,248,244,0.55)' }}
              >
                Un cadru complet gândit pentru ca fiecare copil să crească armonios, în siguranță și bucurie. 8 certitudini pe care le oferim fiecărei familii.
              </p>
              {/* Quality count badge */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full"
                  style={{
                    background: 'rgba(201,107,69,0.12)',
                    border: '1px solid rgba(201,107,69,0.28)',
                  }}
                >
                  <span
                    className="font-serif text-2xl font-bold"
                    style={{ color: '#E5A285' }}
                  >
                    08
                  </span>
                  <span
                    className="font-body text-sm font-medium"
                    style={{ color: 'rgba(250,248,244,0.65)' }}
                  >
                    standarde de excelență
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div
            className="mt-10 h-px w-full"
            style={{ background: 'linear-gradient(90deg, rgba(201,107,69,0.35), rgba(212,160,65,0.25), rgba(107,139,110,0.2), transparent)' }}
          />
        </div>

        {/* ── 8 Qualities — Editorial Grid ──────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {qualities.map((q, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-6 cursor-default transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: `3px solid ${q.color}`,
                backdropFilter: 'blur(8px)',
                animationDelay: `${i * 65}ms`,
              }}
            >
              {/* Large watermark number */}
              <div
                className="absolute top-3 right-4 font-serif font-bold leading-none select-none pointer-events-none"
                style={{
                  fontSize: '4.5rem',
                  color: `${q.color}10`,
                  transition: 'color 0.4s ease',
                }}
              >
                {q.num}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Number label */}
                <span
                  className="font-body text-xs font-bold tracking-widest uppercase block mb-4"
                  style={{ color: q.color }}
                >
                  {q.num}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                  style={{
                    background: `${q.color}18`,
                    border: `1px solid ${q.color}30`,
                  }}
                >
                  <i className={`${q.icon} text-xl`} style={{ color: q.color }} />
                </div>

                <h3
                  className="font-serif font-bold text-base md:text-lg mb-2 leading-snug"
                  style={{ color: 'rgba(250,248,244,0.92)' }}
                >
                  {q.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'rgba(250,248,244,0.48)' }}
                >
                  {q.desc}
                </p>
              </div>

              {/* Bottom hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 20% 80%, ${q.color}0D 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom strip: classroom photo + statement ── */}
        <div
          className={`mt-14 md:mt-18 rounded-3xl overflow-hidden relative transition-all duration-900 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ minHeight: '220px' }}
        >
          <img
            src="/images/services-strip-v5.webp"
            alt="Spațiu educațional Fecioara Maria"
            className="w-full h-full object-cover object-center absolute inset-0"
            style={{ minHeight: '220px' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(28,22,18,0.88) 0%, rgba(28,22,18,0.55) 50%, rgba(28,22,18,0.30) 100%)' }}
          />
          <div className="relative z-10 p-8 md:p-12 flex items-center justify-between flex-wrap gap-6">
            <div>
              <p
                className="font-serif italic text-xl md:text-2xl mb-1"
                style={{ color: 'rgba(242,200,180,0.9)' }}
              >
                „Ne jucăm inteligent."
              </p>
              <p
                className="font-body text-sm"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                Deviza Centrului Educațional Fecioara Maria
              </p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body font-bold text-sm text-white whitespace-nowrap cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #C96B45, #D4A041)',
              }}
            >
              <i className="ri-calendar-check-line" />
              Programează o vizită
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave out */}
      <div className="pointer-events-none overflow-hidden" style={{ height: 56, marginBottom: -1 }}>
        <svg viewBox="0 0 1440 56" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,24 Q360,56 720,22 Q1080,-8 1440,26 L1440,56 L0,56 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
