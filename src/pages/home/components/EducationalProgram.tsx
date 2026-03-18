import { useEffect, useRef, useState } from 'react';

export default function EducationalProgram() {
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

  const domains = [
    {
      icon: 'ri-palette-fill',
      title: 'Estetic și creativ',
      desc: 'Muzică, activități artistico-plastice, dramă, euritmie — copilul descoperă lumea prin simțuri.',
      color: '#C96B45',
      accentBg: 'rgba(201,107,69,0.08)',
      accentBorder: 'rgba(201,107,69,0.18)',
      dotColor: '#C96B45',
    },
    {
      icon: 'ri-heart-3-fill',
      title: 'Socio-emoțional',
      desc: 'Relaționare, socializare, gestionarea emoțiilor — baza echilibrului interior.',
      color: '#D95F52',
      accentBg: 'rgba(217,95,82,0.07)',
      accentBorder: 'rgba(217,95,82,0.15)',
      dotColor: '#D95F52',
    },
    {
      icon: 'ri-chat-3-fill',
      title: 'Limbaj și comunicare',
      desc: 'Dezvoltarea exprimării orale, bilingvism, povești, dialoguri structurate.',
      color: '#D4A041',
      accentBg: 'rgba(212,160,65,0.07)',
      accentBorder: 'rgba(212,160,65,0.15)',
      dotColor: '#D4A041',
    },
    {
      icon: 'ri-flask-fill',
      title: 'Matematică și științe',
      desc: 'Experiențe practice, jocuri logice, observare și mici experimente cu lumea.',
      color: '#6B8B6E',
      accentBg: 'rgba(107,139,110,0.07)',
      accentBorder: 'rgba(107,139,110,0.15)',
      dotColor: '#6B8B6E',
    },
    {
      icon: 'ri-run-fill',
      title: 'Psiho-motric',
      desc: 'Coordonare, mobilitate, rezistență fizică, motricitate fină și grosieră.',
      color: '#4A9E9B',
      accentBg: 'rgba(74,158,155,0.07)',
      accentBorder: 'rgba(74,158,155,0.15)',
      dotColor: '#4A9E9B',
    },
  ];

  return (
    <section
      id="program"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#FAF8F4' }}
    >
      {/* Rainbow wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" style={{ height: 60 }}>
        <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rwSep2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B3D8D7" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#BDD3BF" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#F3DDA0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F2C8B4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,25 Q360,55 720,22 Q1080,-8 1440,28 L1440,60 L0,60 Z" fill="url(#rwSep2)" />
          <path d="M0,38 Q360,60 720,36 Q1080,10 1440,40 L1440,60 L0,60 Z" fill="#FAF8F4" />
        </svg>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left: header + image */}
          <div className={`lg:col-span-2 lg:sticky lg:top-28 transition-all duration-900 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #C96B45, transparent)' }} />
              <span className="chapter-label">Ziua educativă</span>
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: '#2D2520' }}
            >
              Program educațional{' '}
              <em
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #C96B45, #D4A041)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                complet
              </em>
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed mb-8" style={{ color: '#5C4E44' }}>
              Activitățile urmăresc cele 5 domenii de dezvoltare, conform metodologiei moderne, adaptate vârstei și ritmului fiecărui copil.
            </p>

            <div
              className="relative w-full h-64 md:h-72 rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 16px 48px rgba(45,37,32,0.16)' }}
            >
              <img
                src="/images/eduprog-mosaic-v4.webp"
                alt="Activități educaționale diverse"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(45,37,32,0.3) 100%)' }}
              />
            </div>
          </div>

          {/* Right: vertical timeline */}
          <div className={`lg:col-span-3 transition-all duration-900 delay-150 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="absolute left-5 top-8 bottom-8 w-0.5 rounded-full"
                style={{ background: 'linear-gradient(180deg, #F2C8B4, #F3DDA0, #BDD3BF, #B3D8D7, #BDD3BF)' }}
              />

              <div className="space-y-4">
                {domains.map((d, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-6 items-start ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
                    style={{ animationDelay: `${200 + i * 110}ms` }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="relative z-10 w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      style={{
                        background: 'white',
                        boxShadow: `0 4px 16px ${d.color}25`,
                        border: `2px solid ${d.accentBorder}`,
                      }}
                    >
                      <i className={`${d.icon} text-base`} style={{ color: d.color }} />
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: d.accentBg,
                        border: `1px solid ${d.accentBorder}`,
                      }}
                    >
                      <h3
                        className="font-body font-bold text-base md:text-lg mb-1.5"
                        style={{ color: '#2D2520' }}
                      >
                        {d.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#5C4E44' }}>
                        {d.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
