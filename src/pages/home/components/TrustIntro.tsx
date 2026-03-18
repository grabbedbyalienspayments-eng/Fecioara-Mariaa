import { useEffect, useRef, useState } from 'react';

const values = [
  {
    num: '01',
    icon: 'ri-heart-3-fill',
    label: 'Iubire',
    desc: 'Fiecare copil simte că aparține acestui loc.',
    color: '#C96B45',
    glow: 'rgba(201,107,69,0.12)',
  },
  {
    num: '02',
    icon: 'ri-shield-check-fill',
    label: 'Siguranță',
    desc: 'Un mediu protejat, predictibil și cald.',
    color: '#6B8B6E',
    glow: 'rgba(107,139,110,0.12)',
  },
  {
    num: '03',
    icon: 'ri-hand-heart-fill',
    label: 'Încredere',
    desc: 'Parteneriat real și transparent cu familia.',
    color: '#D4A041',
    glow: 'rgba(212,160,65,0.12)',
  },
  {
    num: '04',
    icon: 'ri-sun-fill',
    label: 'Voie bună',
    desc: 'Bucurie autentică în fiecare dimineață.',
    color: '#4A9E9B',
    glow: 'rgba(74,158,155,0.12)',
  },
];

const KINDER_PHOTOS = [
  {
    src: '/images/trust-k1-v2.webp',
    alt: 'Activitate de pictură',
    label: 'Atelier de creație',
  },
  {
    src: '/images/trust-k2-v2.webp',
    alt: 'Joc Montessori cu cuburi',
    label: 'Joc educativ',
  },
  {
    src: '/images/trust-k3-v2.webp',
    alt: 'Povestiri cu educatoarea',
    label: 'Povești cu suflet',
  },
  {
    src: '/images/trust-k4-v2.webp',
    alt: 'Joacă în grădina centrului',
    label: 'Natură & explorare',
  },
];

export default function TrustIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#120E0B' }}
    >
      {/* ── Atmospheric glows ─────────────────────────── */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: '-5%', left: '-8%', width: '55%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(201,107,69,0.10) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          bottom: '0%', right: '-5%', width: '45%', height: '50%',
          background: 'radial-gradient(ellipse, rgba(74,158,155,0.07) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Top rainbow line ─────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 z-10"
        style={{
          height: 2,
          background: 'linear-gradient(90deg, transparent, #C96B45 15%, #D4A041 35%, #6B8B6E 55%, #4A9E9B 75%, transparent)',
          opacity: 0.55,
        }}
      />

      {/* ── Manifesto content ─────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-0 md:pt-32">

        {/* Chapter label */}
        <div className={`flex items-center justify-center gap-4 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,107,69,0.45))' }} />
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase' as const, color: 'rgba(229,162,133,0.65)' }}>
            Valorile noastre
          </span>
          <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, rgba(201,107,69,0.45), transparent)' }} />
        </div>

        {/* Giant manifesto statement */}
        <div className={`text-center mb-6 transition-all duration-1000 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p style={{ fontFamily: 'Lora, serif', fontWeight: 400, fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: 'rgba(250,248,244,0.58)', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: '0.1em' }}>
            Perioada preșcolară reprezintă poate
          </p>
          <p style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '-0.04em', background: 'linear-gradient(128deg, #F2C8B4 0%, #E8C365 45%, #A8D1BF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.08em', display: 'block' }}>
            cea mai importantă
          </p>
          <p style={{ fontFamily: 'Lora, serif', fontWeight: 400, fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: 'rgba(250,248,244,0.58)', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
            etapă din viața unui copil.
          </p>
        </div>

        {/* Supporting text */}
        <div className={`text-center mb-16 transition-all duration-900 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-body text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(250,248,244,0.38)' }}>
            De aceea ne dorim să oferim un spațiu în care copilul se simte iubit,
            în siguranță și încurajat să se dezvolte firesc.
          </p>
        </div>

        {/* Thin separator */}
        <div className={`flex items-center gap-4 mb-16 max-w-2xl mx-auto transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,107,69,0.30))' }} />
          <div className="flex gap-1.5">
            {['#F2C8B4', '#F3DDA0', '#BDD3BF', '#B3D8D7'].map((c, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.55 }} />
            ))}
          </div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(201,107,69,0.30), transparent)' }} />
        </div>
      </div>

      {/* ── Values grid — full bleed ──────────────────── */}
      <div
        className={`relative z-10 grid grid-cols-2 lg:grid-cols-4 transition-all duration-900 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        {values.map((v, i) => (
          <div
            key={i}
            className={`relative group flex flex-col items-center text-center px-6 py-12 md:py-16 cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-1 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
            style={{
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              animationDelay: `${500 + i * 100}ms`,
            }}
          >
            {/* Huge watermark number */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
              <span style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 'clamp(7rem, 12vw, 11rem)', color: `${v.color}`, opacity: 0.05, lineHeight: 1, letterSpacing: '-0.04em', transition: 'opacity 0.5s ease' }} className="group-hover:opacity-[0.09]">
                {v.num}
              </span>
            </div>
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 60%, ${v.glow} 0%, transparent 70%)` }} />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110" style={{ background: `${v.color}14`, border: `1px solid ${v.color}28` }}>
                <i className={`${v.icon} text-2xl`} style={{ color: v.color }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.25rem', color: 'rgba(250,248,244,0.90)', marginBottom: '0.5rem' }}>
                  {v.label}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(250,248,244,0.38)' }}>
                  {v.desc}
                </p>
              </div>
              <div className="w-8 h-0.5 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:w-14" style={{ background: `linear-gradient(90deg, ${v.color}, transparent)` }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Kindergarten photo band ─────────────────────── */}
      <div
        className={`relative z-10 transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 0 }}
      >
        {/* Label strip */}
        <div className="flex items-center justify-center gap-4 py-8 px-6">
          <div className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,107,69,0.35))' }} />
          <div className="flex items-center gap-2.5">
            <i className="ri-sun-fill text-sm" style={{ color: '#E5A285' }} />
            <span style={{ fontFamily: 'Lora, serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.65rem)', color: 'rgba(250,248,244,0.72)', letterSpacing: '-0.01em' }}>
              Viața de zi cu zi la noi
            </span>
            <i className="ri-sun-fill text-sm" style={{ color: '#E5A285' }} />
          </div>
          <div className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(90deg, rgba(201,107,69,0.35), transparent)' }} />
        </div>

        {/* Photos row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {KINDER_PHOTOS.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-default"
              style={{ height: 220 }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(16,12,10,0.72) 100%)' }}
              />
              {/* Hover tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'rgba(201,107,69,0.12)' }}
              />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(229,162,133,0.85)' }}>
                  {p.label}
                </span>
                <div className="w-6 h-6 flex items-center justify-center rounded-full" style={{ background: 'rgba(201,107,69,0.20)', border: '1px solid rgba(201,107,69,0.35)' }}>
                  <i className="ri-arrow-right-up-line text-xs" style={{ color: '#E5A285' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Playful tagline banner */}
        <div
          className="flex items-center justify-center gap-6 py-7 px-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          {[
            { icon: 'ri-paint-brush-fill', text: 'Pictăm' },
            { icon: 'ri-music-2-fill', text: 'Cântăm' },
            { icon: 'ri-book-open-fill', text: 'Citim' },
            { icon: 'ri-seedling-fill', text: 'Creștem' },
            { icon: 'ri-run-fill', text: 'Explorăm' },
            { icon: 'ri-heart-3-fill', text: 'Iubim' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 group cursor-default">
              <div className="w-9 h-9 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" style={{ background: 'rgba(201,107,69,0.10)', border: '1px solid rgba(201,107,69,0.20)' }}>
                <i className={`${item.icon} text-sm`} style={{ color: '#E5A285' }} />
              </div>
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'rgba(250,248,244,0.35)' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Wave out to white ─────────────────────────── */}
      <div className="pointer-events-none overflow-hidden" style={{ height: 68, marginBottom: -1 }}>
        <svg viewBox="0 0 1440 68" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="twOut" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F2C8B4" stopOpacity="0.20" />
              <stop offset="50%" stopColor="#F3DDA0" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#BDD3BF" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path d="M0,24 Q360,62 720,22 Q1080,-16 1440,26 L1440,68 L0,68 Z" fill="url(#twOut)" />
          <path d="M0,42 Q360,68 720,40 Q1080,12 1440,46 L1440,68 L0,68 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
