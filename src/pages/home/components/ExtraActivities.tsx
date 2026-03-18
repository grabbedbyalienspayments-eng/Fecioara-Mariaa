import { useEffect, useRef, useState } from 'react';

const activities = [
  {
    icon: 'ri-book-open-fill',
    title: 'Pregătire pentru școală',
    desc: 'Scris, citit, socotit — fundament solid, abordare jucăușă.',
    color: '#C96B45',
    bg: 'rgba(201,107,69,0.07)',
    border: 'rgba(201,107,69,0.18)',
  },
  {
    icon: 'ri-global-fill',
    title: 'Limba engleză intensiv',
    desc: 'Imersie naturală, jocuri și conversații zilnice.',
    color: '#4A9E9B',
    bg: 'rgba(74,158,155,0.07)',
    border: 'rgba(74,158,155,0.16)',
  },
  {
    icon: 'ri-translate-2',
    title: 'Limba germană',
    desc: 'Introducere timpurie în a treia limbă europeană.',
    color: '#D4A041',
    bg: 'rgba(212,160,65,0.07)',
    border: 'rgba(212,160,65,0.16)',
  },
  {
    icon: 'ri-dance-fill',
    title: 'Curs de dans',
    desc: 'Parteneriat cu Școala de dans „Mihai Petre".',
    color: '#D95F52',
    bg: 'rgba(217,95,82,0.07)',
    border: 'rgba(217,95,82,0.16)',
    featured: true,
  },
  {
    icon: 'ri-lightbulb-fill',
    title: 'Dezvoltare personală',
    desc: 'Emoții, reziliență, leadership în miniatură.',
    color: '#6B8B6E',
    bg: 'rgba(107,139,110,0.07)',
    border: 'rgba(107,139,110,0.16)',
  },
  {
    icon: 'ri-palette-fill',
    title: 'Arte plastice',
    desc: 'Creație liberă, tehnici diverse, expresie autentică.',
    color: '#C96B45',
    bg: 'rgba(201,107,69,0.07)',
    border: 'rgba(201,107,69,0.18)',
  },
  {
    icon: 'ri-brush-fill',
    title: 'Curs de pictură',
    desc: 'Acuarelă, guașă, compoziție cu un artist îndrumător.',
    color: '#D4A041',
    bg: 'rgba(212,160,65,0.07)',
    border: 'rgba(212,160,65,0.16)',
  },
  {
    icon: 'ri-music-fill',
    title: 'Muzică vocală',
    desc: 'Cântec individual și coral, ritm, solfegiu simplu.',
    color: '#4A9E9B',
    bg: 'rgba(74,158,155,0.07)',
    border: 'rgba(74,158,155,0.16)',
  },
];

export default function ExtraActivities() {
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
      id="activitati"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#FAF8F4' }}
    >
      {/* Grain texture */}
      <div className="grain-texture absolute inset-0 z-[1] opacity-[0.018] pointer-events-none" />

      {/* Soft bg texture */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(212,160,65,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(201,107,69,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ── Header ───────────────────────────────── */}
        <div
          className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #D4A041, transparent)' }} />
            <span className="chapter-label">Talente și pasiuni</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2
              className="font-serif font-bold leading-tight"
              style={{
                color: '#2D2520',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 0.95,
              }}
            >
              Activități{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #D4A041, #C96B45)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                suplimentare
              </em>
            </h2>
            <p
              className="font-body text-base md:text-lg leading-relaxed max-w-sm"
              style={{ color: '#5C4E44' }}
            >
              Activități extracurriculare care completează dezvoltarea copilului, organizate cu parteneri de calitate.
            </p>
          </div>
        </div>

        {/* ── Dark editorial manifesto strip ──────── */}
        <div
          className={`rounded-2xl mb-12 overflow-hidden relative transition-all duration-900 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ background: '#1C1612' }}
        >
          {/* Cinematic top line */}
          <div
            className="absolute inset-x-0 top-0"
            style={{ height: 2, background: 'linear-gradient(90deg, transparent, #D4A041 25%, #C96B45 55%, #4A9E9B 82%, transparent)', opacity: 0.55 }}
          />
          <div className="px-7 py-8 md:px-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
            {/* Big number accent */}
            <div
              className="flex-shrink-0 hidden sm:flex items-center justify-center"
              style={{
                fontFamily: 'Lora, serif',
                fontWeight: 700,
                fontSize: 'clamp(4rem, 7vw, 6rem)',
                lineHeight: 1,
                background: 'linear-gradient(128deg, #F2C8B4 0%, #E8C365 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.85,
              }}
            >
              8
            </div>
            <div className="hidden sm:block w-px self-stretch" style={{ background: 'rgba(201,107,69,0.20)' }} />
            <div className="flex-1">
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(229,162,133,0.60)',
                  marginBottom: '0.5rem',
                }}
              >
                Activități suplimentare disponibile
              </p>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  color: 'rgba(250,248,244,0.88)',
                  lineHeight: 1.3,
                }}
              >
                Fiecare copil are talentul lui ascuns.{' '}
                <span
                  style={{
                    background: 'linear-gradient(128deg, #F2C8B4, #E8C365)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Îl descoperim împreună.
                </span>
              </p>
            </div>
            {/* Tags strip */}
            <div className="flex flex-wrap gap-2 flex-shrink-0 max-w-[220px]">
              {['Dans', 'Pictură', 'Muzică', 'Engleză', 'Germană'].map((t) => (
                <span
                  key={t}
                  className="whitespace-nowrap"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase' as const,
                    padding: '0.3em 0.9em',
                    borderRadius: '9999px',
                    border: '1px solid rgba(201,107,69,0.25)',
                    background: 'rgba(201,107,69,0.09)',
                    color: '#F2C8B4',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Activity Grid — 4 × 2 perfectly balanced ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {activities.map((a, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-5 md:p-6 flex flex-col gap-4 cursor-default transition-all duration-400 hover:-translate-y-2 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
              style={{
                background: a.featured ? 'white' : a.bg,
                border: `1px solid ${a.border}`,
                boxShadow: a.featured ? `0 12px 40px ${a.color}18` : 'none',
                animationDelay: `${i * 60}ms`,
              }}
            >
              {/* Featured badge */}
              {a.featured && (
                <div
                  className="absolute -top-2.5 left-4 px-3 py-0.5 rounded-full text-xs font-body font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${a.color}, #C96B45)`,
                    color: 'white',
                  }}
                >
                  Partener exclusiv
                </div>
              )}

              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: a.featured ? `${a.color}12` : 'white',
                  border: a.featured ? `1px solid ${a.color}25` : '1px solid rgba(242,233,221,0.8)',
                }}
              >
                <i className={`${a.icon} text-lg`} style={{ color: a.color }} />
              </div>

              <div className="flex-1">
                <h3
                  className="font-body font-bold text-sm md:text-[15px] mb-1.5 leading-snug"
                  style={{ color: '#2D2520' }}
                >
                  {a.title}
                </h3>
                <p
                  className="font-body text-xs md:text-sm leading-relaxed"
                  style={{ color: '#7A6B60' }}
                >
                  {a.desc}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${a.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom image accent ─────────────────────── */}
        <div
          className={`mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-900 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { seq: 'act-bottom-1-v5', alt: 'Arte plastice', caption: 'Arte & Pictură' },
            { seq: 'act-bottom-2-v5', alt: 'Dans și muzică', caption: 'Dans & Muzică', tall: true },
            { seq: 'act-bottom-3-v5', alt: 'Activități engleza', caption: 'Engleză & Germană' },
          ].map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden"
              style={{ height: img.tall ? '220px' : '180px' }}
            >
              <img
                src={`/images/${img.seq}.webp`}
                alt={img.alt}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(45,37,32,0.45) 100%)' }}
              />
              <div className="absolute bottom-3 left-4">
                <span className="font-body text-xs font-bold text-white/90 tracking-wide">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
