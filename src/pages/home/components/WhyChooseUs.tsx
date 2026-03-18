import { useEffect, useRef, useState } from 'react';

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      nr: '01',
      icon: 'ri-chat-3-fill',
      title: 'Comunicare zilnică',
      desc: 'Fiecare zi se încheie cu o scurtă discuție directă educator–părinte despre starea copilului.',
      color: '#C96B45',
    },
    {
      nr: '02',
      icon: 'ri-file-text-fill',
      title: 'Raport săptămânal',
      desc: 'Sumar detaliat al activităților, comportamentului și progresului copilului în fiecare săptămână.',
      color: '#D4A041',
    },
    {
      nr: '03',
      icon: 'ri-restaurant-fill',
      title: 'Transmiterea meniului',
      desc: 'Părinții primesc meniul săptămânal — transparență deplină în alimentația copilului.',
      color: '#6B8B6E',
    },
    {
      nr: '04',
      icon: 'ri-notification-3-fill',
      title: 'Informare organizatorică',
      desc: 'Anunțuri clare și prompte despre program, sărbători și orice modificare operativă.',
      color: '#4A9E9B',
    },
    {
      nr: '05',
      icon: 'ri-user-voice-fill',
      title: 'Întâlniri individuale',
      desc: 'Consultații programate cu educatorul sau directorul educațional, la solicitarea părintelui.',
      color: '#C96B45',
    },
    {
      nr: '06',
      icon: 'ri-bar-chart-grouped-fill',
      title: 'Monitorizarea progresului',
      desc: 'Urmărirea individuală a copilului — puncte forte, arii de lucru și recomandări personalizate.',
      color: '#D4A041',
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#FAF8F4' }}
    >
      {/* Grain texture */}
      <div className="grain-texture absolute inset-0 z-[1] opacity-[0.018] pointer-events-none" />

      {/* Atmospheric glow */}
      <div
        className="absolute top-0 right-0 w-[520px] h-[420px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(201,107,69,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(107,139,110,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }}
      />

      {/* Rainbow wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden z-[2]" style={{ height: 55 }}>
        <svg viewBox="0 0 1440 55" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rwSep4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BDD3BF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#B3D8D7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F3DDA0" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,22 Q360,50 720,20 Q1080,-10 1440,24 L1440,55 L0,55 Z" fill="url(#rwSep4)" />
          <path d="M0,34 Q360,55 720,32 Q1080,8 1440,36 L1440,55 L0,55 Z" fill="#FAF8F4" />
        </svg>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left column */}
          <div className={`transition-all duration-900 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #6B8B6E, transparent)' }} />
              <span className="chapter-label">Parteneriat cu familia</span>
            </div>
            <h2
              className="font-serif font-bold mb-6 leading-tight"
              style={{
                color: '#2D2520',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 0.95,
              }}
            >
              Comunicarea cu{' '}
              <em
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #6B8B6E, #4A9E9B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                părinții
              </em>
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10" style={{ color: '#4A3F36' }}>
              Credem că o educație bună se construiește împreună cu familia. Comunicarea constantă și transparentă nu este un bonus — este parte din valorile noastre.
            </p>

            {/* Image */}
            <div
              className="w-full h-72 md:h-80 rounded-3xl overflow-hidden relative"
              style={{ boxShadow: '0 20px 60px rgba(45,37,32,0.16)' }}
            >
              <img
                src="/images/parent-comm-v4.webp"
                alt="Comunicare educator-părinte"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(45,37,32,0.2) 100%)' }}
              />
            </div>
          </div>

          {/* Right: 6 numbered communication points */}
          <div
            className={`space-y-3 transition-all duration-900 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`group relative flex items-start gap-4 rounded-2xl p-5 cursor-default transition-all duration-350 hover:-translate-y-0.5 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
                style={{
                  background: 'white',
                  border: '1px solid rgba(242,233,221,0.8)',
                  animationDelay: `${200 + i * 80}ms`,
                }}
              >
                {/* Number */}
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}
                >
                  <span
                    className="font-serif font-bold text-sm"
                    style={{ color: item.color }}
                  >
                    {item.nr}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <i className={`${item.icon} text-sm`} style={{ color: item.color }} />
                    <h3
                      className="font-body font-bold text-sm md:text-base"
                      style={{ color: '#2D2520' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#7A6B60' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Hover accent */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(180deg, ${item.color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Dark cinematic interlude ─────────────── */}
        <div
          className={`mt-20 rounded-3xl overflow-hidden relative transition-all duration-900 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <img
            src="/images/family-banner-v4.webp"
            alt="Comunitate Fecioara Maria"
            className="w-full h-full object-cover object-center absolute inset-0"
            style={{ minHeight: '200px' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(28,22,18,0.93) 0%, rgba(28,22,18,0.65) 55%, rgba(28,22,18,0.38) 100%)' }}
          />
          {/* Cinematic top line */}
          <div
            className="absolute inset-x-0 top-0"
            style={{ height: 2, background: 'linear-gradient(90deg, transparent, #C96B45 20%, #D4A041 50%, #6B8B6E 80%, transparent)', opacity: 0.55 }}
          />
          <div className="relative z-10 px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(229,162,133,0.7)',
                  marginBottom: '0.6rem',
                }}
              >
                Comunitate · Parteneriat · Transparență
              </p>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                  lineHeight: 1.15,
                  background: 'linear-gradient(128deg, #F2C8B4 0%, #E8C365 55%, #A8D1BF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Copilul tău are o familie<br />și acolo la noi.
              </p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body font-bold text-sm text-white whitespace-nowrap cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #C96B45, #D4A041)' }}
            >
              <i className="ri-calendar-check-line" />
              Programează o vizită
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
