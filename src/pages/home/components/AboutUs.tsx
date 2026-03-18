import { useEffect, useRef, useState } from 'react';
import FeatherMotif from '../../../components/base/FeatherMotif';

export default function AboutUs() {
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

  const highlights = [
    { icon: 'ri-sun-line', label: 'Spații luminoase', color: '#D4A041' },
    { icon: 'ri-plant-line', label: 'Loc de joacă exterior', color: '#6B8B6E' },
    { icon: 'ri-user-heart-line', label: 'Personal calificat', color: '#C96B45' },
    { icon: 'ri-puzzle-line', label: 'Activități adaptate vârstei', color: '#4A9E9B' },
  ];

  return (
    <section
      ref={sectionRef}
      id="despre"
      className="relative overflow-hidden"
      style={{ background: 'white' }}
    >
      {/* ── DESPRE NOI ──────────────────────────────────── */}
      <div className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Storytelling Photo Cluster */}
            <div
              className={`relative transition-all duration-900 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              {/* Main large image */}
              <div
                className="relative w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 20px 60px rgba(45,37,32,0.18)' }}
              >
                <img
                  src="/images/about-cluster-main-v4.webp"
                  alt="Sala de clasă principală"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(45,37,32,0.25) 100%)' }}
                />
              </div>

              {/* Small image — top right overlap */}
              <div
                className="absolute -top-5 -right-5 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-4 border-white"
                style={{ boxShadow: '0 8px 32px rgba(45,37,32,0.16)' }}
              >
                <img
                  src="/images/about-cluster-sm2-v4.webp"
                  alt="Educatoare citind cu copiii"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Accent: feather overlay */}
              <div className="absolute top-5 left-5 opacity-60 pointer-events-none" aria-hidden>
                <FeatherMotif size="md" color="text-terra-200" delay={500} />
              </div>

              {/* Highlights grid below cluster */}
              <div className="grid grid-cols-2 gap-3 mt-10">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: '#FAF8F4', border: '1px solid #F2E9DD' }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{ background: 'white' }}
                    >
                      <i className={`${h.icon} text-lg`} style={{ color: h.color }} />
                    </div>
                    <span className="font-body text-sm font-semibold" style={{ color: '#2D2520' }}>
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text column */}
            <div
              className={`transition-all duration-900 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #C96B45, transparent)' }} />
                <span className="chapter-label">Povestea noastră</span>
              </div>
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-7 leading-tight"
                style={{ color: '#2D2520' }}
              >
                Despre noi
              </h2>
              <p className="font-body text-lg leading-relaxed mb-5" style={{ color: '#4A3F36' }}>
                Activitatea noastră este construită în jurul{' '}
                <strong style={{ color: '#2D2520' }}>dezvoltării armonioase a copilului</strong>
                {' '}— cognitiv, emoțional și social. Punem accent pe o{' '}
                <strong style={{ color: '#2D2520' }}>atmosferă familială</strong>,
                respectarea individualității fiecărui copil și o{' '}
                <strong style={{ color: '#2D2520' }}>comunicare constantă cu părinții</strong>.
              </p>
              <p className="font-body text-lg leading-relaxed mb-10" style={{ color: '#4A3F36' }}>
                Ne dorim ca fiecare copil să își descopere potențialul într-un ritm potrivit vârstei sale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Rainbow wave separator ──────────────────────── */}
      <div className="pointer-events-none overflow-hidden" style={{ height: 48, marginBottom: -1 }}>
        <svg viewBox="0 0 1440 48" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rwSep1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#F2C8B4" stopOpacity="0.5" />
              <stop offset="25%"  stopColor="#F3DDA0" stopOpacity="0.45" />
              <stop offset="55%"  stopColor="#BDD3BF" stopOpacity="0.4" />
              <stop offset="80%"  stopColor="#B3D8D7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F2C8B4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,20 Q360,44 720,18 Q1080,-4 1440,22 L1440,48 L0,48 Z" fill="url(#rwSep1)" />
          <path d="M0,30 Q360,48 720,28 Q1080,8 1440,32 L1440,48 L0,48 Z" fill="#FAF8F4" />
        </svg>
      </div>

      {/* ── VIZIUNEA NOASTRĂ ────────────────────────────── */}
      <div className="relative py-20 md:py-32" style={{ background: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          {/* Manifesto header — full width emotional */}
          <div
            className={`text-center mb-16 transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #D4A041)' }} />
              <span className="chapter-label">Viziunea noastră</span>
              <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #D4A041, transparent)' }} />
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
              style={{ color: '#2D2520' }}
            >
              Formăm{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #C96B45, #D4A041)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                personalități armonioase
              </em>
            </h2>
            <p className="font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#5C4E44' }}>
              Centrul Educațional Fecioara Maria își propune să formeze copilului de vârstă preșcolară o personalitate armonioasă, creativă, inspirându-se din principiile pedagogiei moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Motto card */}
            <div
              className={`rounded-3xl p-8 md:p-12 flex flex-col gap-6 transition-all duration-900 delay-200 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
              style={{
                background: 'linear-gradient(135deg, rgba(201,107,69,0.08) 0%, rgba(212,160,65,0.06) 100%)',
                border: '1px solid rgba(201,107,69,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <FeatherMotif size="md" color="text-terra-400" delay={200} />
                <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(201,107,69,0.4), transparent)' }} />
              </div>
              <div>
                <p className="chapter-label mb-3">Deviza centrului</p>
                <p
                  className="font-serif text-3xl md:text-4xl font-bold italic leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #C96B45, #D4A041)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  „Ne jucăm inteligent!"
                </p>
              </div>

              {/* Vision image */}
              <div
                className="w-full h-52 rounded-2xl overflow-hidden mt-2"
                style={{ boxShadow: '0 8px 32px rgba(45,37,32,0.12)' }}
              >
                <img
                  src="/images/vision-scene-v4.webp"
                  alt="Copii învățând prin joacă"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Montessori quote — editorial treatment */}
            <div
              className={`transition-all duration-900 delay-350 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
              style={{ animationDelay: '350ms' }}
            >
              <div
                className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
                style={{
                  background: '#2D2520',
                  boxShadow: '0 20px 60px rgba(45,37,32,0.25)',
                }}
              >
                {/* Giant quote mark */}
                <div
                  className="absolute top-4 left-6 font-serif leading-none select-none pointer-events-none"
                  style={{ fontSize: '10rem', color: 'rgba(201,107,69,0.15)' }}
                >
                  &ldquo;
                </div>

                <div className="relative pt-8">
                  <blockquote
                    className="font-serif text-2xl md:text-3xl leading-relaxed italic mb-8"
                    style={{ color: 'rgba(255,255,255,0.92)' }}
                  >
                    Să nu-i educăm pe copiii noștri pentru lumea de azi. Această lume nu va mai exista când vor fi mari. Și nimic nu ne permite să știm cum va fi lumea lor.
                  </blockquote>
                  <footer className="flex items-center gap-4">
                    <div
                      className="w-12 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #C96B45, #D4A041)' }}
                    />
                    <div>
                      <p
                        className="font-body font-bold text-sm tracking-widest uppercase"
                        style={{ color: '#E5A285' }}
                      >
                        Maria Montessori
                      </p>
                      <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        pedagogă, medic, filosof
                      </p>
                    </div>
                  </footer>
                </div>

                {/* Ink accent right side */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-1 rounded-r-3xl"
                  style={{ background: 'linear-gradient(180deg, #C96B45, #D4A041, #6B8B6E)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
