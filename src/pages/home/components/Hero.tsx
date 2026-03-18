import { useEffect, useState } from 'react';

const MARQUEE_ITEMS = [
  { icon: 'ri-award-fill', label: 'Grădiniță acreditată' },
  { icon: 'ri-leaf-fill', label: 'Metoda Montessori' },
  { icon: 'ri-global-fill', label: 'Predare bilingvă' },
  { icon: 'ri-heart-3-fill', label: 'Personal dedicat' },
  { icon: 'ri-restaurant-fill', label: 'Bucătărie proprie' },
  { icon: 'ri-seedling-fill', label: 'Creșă 0–3 ani' },
  { icon: 'ri-user-star-fill', label: 'Asistență medicală' },
  { icon: 'ri-chat-smile-3-fill', label: 'Comunicare zilnică' },
];

const TAGS = ['Creativitate', 'Joc', 'Încredere', 'Bucurie', 'Sănătate', 'Premium'];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const bgOffset = scrollY * 0.42;
  const txtOffset = scrollY * 0.10;

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () =>
    document.getElementById('despre')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="acasa"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#1C1612' }}
    >
      {/* ── Parallax BG ─────────────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${bgOffset}px) scale(1.15)`, willChange: 'transform' }}
      >
        <img
          src="/images/b0b60a7b76a2.webp"
          alt="Centrul Educațional Fecioara Maria — spațiu de învățare"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: '120vh' }}
        />
      </div>

      {/* ── Overlays ──────────────────────────────────── */}
      {/* Left-heavy dark gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(108deg, rgba(28,22,18,0.93) 0%, rgba(28,22,18,0.68) 48%, rgba(28,22,18,0.35) 100%)',
        }}
      />
      {/* Right side lighter on desktop so photos breathe */}
      <div
        className="absolute inset-0 z-[2] hidden lg:block"
        style={{
          background: 'linear-gradient(to left, rgba(28,22,18,0.52) 0%, transparent 42%)',
        }}
      />
      {/* Bottom fade for marquee */}
      <div
        className="absolute inset-x-0 bottom-0 z-[3]"
        style={{
          height: 200,
          background: 'linear-gradient(180deg, transparent, rgba(16,12,10,0.96))',
        }}
      />
      {/* Warm left glow */}
      <div
        className="absolute z-[4] pointer-events-none"
        style={{
          top: '8%',
          left: '-10%',
          width: '58%',
          height: '80%',
          background:
            'radial-gradient(ellipse at 15% 50%, rgba(201,107,69,0.15) 0%, transparent 62%)',
          filter: 'blur(64px)',
        }}
      />
      {/* Grain texture */}
      <div className="grain-texture absolute inset-0 z-[5] opacity-[0.025] pointer-events-none" />
      {/* Cinematic top stripe */}
      <div
        className="absolute inset-x-0 top-0 z-[6]"
        style={{
          height: 3,
          background:
            'linear-gradient(90deg, transparent, rgba(201,107,69,0.6) 20%, rgba(212,160,65,0.45) 55%, rgba(74,158,155,0.3) 82%, transparent)',
        }}
      />

      {/* ── Hero content ──────────────────────────────── */}
      <div
        className="relative z-10 flex-1 flex items-center w-full"
        style={{ transform: `translateY(-${txtOffset}px)`, willChange: 'transform' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-32 sm:pt-40 md:pt-52 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-8 xl:gap-20 items-center">

            {/* ── LEFT: Editorial text ──────────────── */}
            <div style={{ position: 'relative', zIndex: 20 }}>
              {/* Chapter eyebrow */}
              <div
                className={`flex items-center gap-3 mb-6 sm:mb-8 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div
                  className="h-px w-8 sm:w-12 rounded-full"
                  style={{ background: 'rgba(201,107,69,0.55)' }}
                />
                <span
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 'clamp(0.55rem, 1.8vw, 0.72rem)',
                    fontWeight: 700,
                    letterSpacing: '0.20em',
                    textTransform: 'uppercase' as const,
                    color: '#E5A285',
                    opacity: 0.9,
                  }}
                >
                  Centrul Educațional Fecioara Maria • Est. 2003
                </span>
                <div
                  className="h-px w-8 sm:w-12 rounded-full"
                  style={{ background: 'rgba(201,107,69,0.55)' }}
                />
              </div>

              {/* MASSIVE headline */}
              <div
                className={`mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ overflow: 'visible' }}
              >
                <h1
                  style={{
                    fontFamily: 'Lora, serif',
                    fontWeight: 700,
                    fontSize: 'clamp(2.8rem, 9vw, 10rem)',
                    lineHeight: 0.9,
                    color: 'rgba(250,248,244,0.97)',
                    letterSpacing: '-0.035em',
                    textShadow: '0 4px 80px rgba(0,0,0,0.5)',
                    marginBottom: '0.06em',
                    display: 'block',
                    overflow: 'visible',
                  }}
                >
                  Ne jucăm
                </h1>
                <h1
                  style={{
                    fontFamily: 'Lora, serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: 'clamp(2.8rem, 9vw, 10rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.035em',
                    background: 'linear-gradient(128deg, #F2C8B4 0%, #E8C365 40%, #A8D1BF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'block',
                    paddingBottom: '0.32em',
                    paddingTop: '0.04em',
                    overflow: 'visible',
                    marginBottom: 0,
                  }}
                >
                  inteligent.
                </h1>
              </div>

              {/* ── Keyword pills ───────────────────── */}
              <div
                className={`flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 transition-all duration-700 delay-350 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: 'clamp(0.58rem, 1.4vw, 0.65rem)',
                      fontWeight: 800,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase' as const,
                      padding: '0.35em 0.9em',
                      borderRadius: '9999px',
                      border: '1px solid rgba(201,107,69,0.28)',
                      background: 'rgba(201,107,69,0.09)',
                      color: '#F2C8B4',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Ink divider */}
              <div
                className={`flex items-center gap-4 mb-5 sm:mb-7 transition-all duration-700 delay-400 ${
                  visible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div
                  style={{
                    width: 56,
                    height: 1,
                    background: 'linear-gradient(90deg, #C96B45, #D4A041)',
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#D4A041',
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    width: 36,
                    height: 1,
                    background: 'linear-gradient(90deg, #D4A041, #6B8B6E)',
                    borderRadius: 9999,
                  }}
                />
              </div>

              {/* Sub description */}
              <p
                className={`font-body text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-11 transition-all duration-900 delay-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ color: 'rgba(250,248,244,0.62)', lineHeight: '1.72' }}
              >
                Servicii de creșă și grădiniță, predare bilingvă română–engleză,
                activități educative variate și comunicare permanentă cu părinții.
              </p>

              {/* CTA buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-900 delay-650 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <button
                  onClick={scrollToContact}
                  className="group relative overflow-hidden px-7 sm:px-9 py-3.5 sm:py-4 font-body font-bold text-sm sm:text-base text-white rounded-full whitespace-nowrap cursor-pointer shimmer-hover transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #C96B45, #D4A041)',
                    boxShadow: '0 8px 36px rgba(201,107,69,0.42)',
                  }}
                >
                  <span className="flex items-center justify-center gap-2.5">
                    Programează o vizită
                    <i className="ri-calendar-check-line text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </button>
                <button
                  onClick={scrollToAbout}
                  className="px-7 sm:px-9 py-3.5 sm:py-4 font-body font-semibold text-sm sm:text-base rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.20)',
                    color: 'rgba(250,248,244,0.82)',
                  }}
                >
                  Descoperă grădinița
                </button>
              </div>
            </div>

            {/* ── RIGHT: Photo strip (desktop only) ── */}
            <div
              className={`hidden lg:flex flex-col gap-4 transition-all duration-1000 delay-800 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ position: 'relative', zIndex: 10 }}
            >
              {/* Vertical decorative label */}
              <div className="flex justify-end pr-1 mb-2">
                <span
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.26em',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(229,162,133,0.55)',
                    writingMode: 'vertical-rl' as const,
                    textOrientation: 'mixed' as const,
                    transform: 'rotate(180deg)',
                    height: 190,
                    display: 'block',
                  }}
                >
                  Centrul Educațional Fecioara Maria • Est. 2003
                </span>
              </div>

              {/* Photo 1 — tall */}
              <div
                className="w-full rounded-2xl overflow-hidden relative"
                style={{
                  height: 234,
                  boxShadow: '0 28px 80px rgba(0,0,0,0.60)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <img
                  src="/images/c4c3b8d31434.webp"
                  alt="Spații educaționale Montessori"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 45%, rgba(16,12,10,0.50) 100%)',
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl"
                  style={{
                    background: 'rgba(16,12,10,0.65)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.63rem',
                      fontWeight: 700,
                      color: 'rgba(229,162,133,0.92)',
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    Spații Montessori
                  </span>
                </div>
              </div>

              {/* Photo 2 — shorter, offset right */}
              <div
                className="w-[90%] self-end rounded-2xl overflow-hidden relative"
                style={{
                  height: 170,
                  boxShadow: '0 16px 52px rgba(0,0,0,0.50)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <img
                  src="/images/1c11436d73f3.webp"
                  alt="Copii în activități creative"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 35%, rgba(16,12,10,0.48) 100%)',
                  }}
                />
                <div
                  className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl"
                  style={{
                    background: 'rgba(16,12,10,0.65)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.63rem',
                      fontWeight: 700,
                      color: 'rgba(229,162,133,0.92)',
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    Creativitate &amp; Joc
                  </span>
                </div>
              </div>

              {/* Brand card */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(201,107,69,0.22)',
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <i className="ri-quill-pen-fill text-sm" style={{ color: '#E5A285' }} />
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(229,162,133,0.60)',
                    }}
                  >
                    Deviza centrului
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontStyle: 'italic',
                    fontSize: '1.05rem',
                    color: 'rgba(250,248,244,0.80)',
                  }}
                >
                  „Ne jucăm inteligent!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────── */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div
          className="w-5 h-9 border-2 rounded-full flex justify-center pt-2"
          style={{ borderColor: 'rgba(255,255,255,0.28)' }}
        >
          <div
            className="w-1 h-2.5 rounded-full animate-slideUp"
            style={{ background: 'rgba(255,255,255,0.55)' }}
          />
        </div>
      </div>

      {/* ── Wave into next section ────────────────────── */}
      <div
        className="relative z-20 pointer-events-none overflow-hidden"
        style={{ height: 72, marginBottom: -1 }}
      >
        <svg viewBox="0 0 1440 72" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F2C8B4" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#F3DDA0" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#BDD3BF" stopOpacity="0.20" />
            </linearGradient>
          </defs>
          <path
            d="M0,28 Q360,68 720,26 Q1080,-14 1440,30 L1440,72 L0,72 Z"
            fill="url(#hg3)"
          />
          <path
            d="M0,46 Q360,72 720,44 Q1080,14 1440,50 L1440,72 L0,72 Z"
            fill="#120E0B"
          />
        </svg>
      </div>
    </section>
  );
}
