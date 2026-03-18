import { useEffect, useRef, useState } from 'react';

export default function KindergartenLife() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const mosaicImages = [
    {
      url: '/images/mosaic-main-wide-v4.webp',
      alt: 'Activități creative',
      caption: 'Activități creative',
      area: 'main',
    },
    {
      url: '/images/mosaic-portrait-v4.webp',
      alt: 'Moment de bucurie',
      caption: 'Momente de bucurie',
      area: 'tall',
    },
    {
      url: '/images/mosaic-story-v4.webp',
      alt: 'Povești și lectură',
      caption: 'Povești și lectură',
      area: 'sm1',
    },
    {
      url: '/images/mosaic-outdoor-v4.webp',
      alt: 'Joacă în aer liber',
      caption: 'Joacă în aer liber',
      area: 'sm2',
    },
    {
      url: '/images/mosaic-blocks-v4.webp',
      alt: 'Construcție și explorare',
      caption: 'Construcție',
      area: 'sm3',
    },
  ];

  const rainbowColors = ['#F2C8B4', '#F3DDA0', '#BDD3BF', '#B3D8D7', '#D4A041'];

  return (
    <section
      id="galerie"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: 'white' }}
    >
      {/* Grain texture */}
      <div className="grain-texture absolute inset-0 z-[1] opacity-[0.015] pointer-events-none" />

      {/* Rainbow wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden z-[2]" style={{ height: 55 }}>
        <svg viewBox="0 0 1440 55" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rwSep7" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F2C8B4" stopOpacity="0.4" />
              <stop offset="33%" stopColor="#BDD3BF" stopOpacity="0.35" />
              <stop offset="66%" stopColor="#B3D8D7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F3DDA0" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,20 Q360,50 720,18 Q1080,-10 1440,22 L1440,55 L0,55 Z" fill="url(#rwSep7)" />
          <path d="M0,32 Q360,55 720,30 Q1080,7 1440,34 L1440,55 L0,55 Z" fill="white" />
        </svg>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #C96B45, transparent)' }} />
              <span className="chapter-label">Viața în grădiniță</span>
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{
                color: '#2D2520',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 0.95,
              }}
            >
              Momente{' '}
              <em
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #C96B45, #4A9E9B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                reale
              </em>
            </h2>
          </div>
          <p className="font-body text-base md:text-lg max-w-md leading-relaxed" style={{ color: '#5C4E44' }}>
            Fiecare zi aduce noi descoperiri, zâmbete și amintiri. Copiii participă la activități educative, creative, de comunicare și socializare.
          </p>
        </div>

        {/* Rainbow accent strip */}
        <div className={`flex gap-1 mb-8 transition-all duration-900 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {rainbowColors.map((c, i) => (
            <div
              key={i}
              className="h-1 flex-1 rounded-full"
              style={{ background: c, opacity: 0.6, transitionDelay: `${i * 80}ms` }}
            />
          ))}
        </div>

        {/* ── Dark cinematic statement strip ─────── */}
        <div
          className={`rounded-2xl mb-8 overflow-hidden relative transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ background: '#1C1612', border: '1px solid rgba(201,107,69,0.12)' }}
        >
          {/* Cinematic top line */}
          <div
            className="absolute inset-x-0 top-0"
            style={{ height: 2, background: 'linear-gradient(90deg, transparent, #C96B45 20%, #D4A041 55%, #4A9E9B 82%, transparent)', opacity: 0.5 }}
          />
          <div className="px-7 py-7 md:py-8 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: 'rgba(201,107,69,0.12)', border: '1px solid rgba(201,107,69,0.22)' }}
              >
                <i className="ri-camera-fill text-base" style={{ color: '#E5A285' }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    background: 'linear-gradient(128deg, #F2C8B4 0%, #E8C365 50%, #A8D1BF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.25,
                  }}
                >
                  Fiecare zi este o poveste nouă.
                </p>
                <p
                  className="font-body text-sm mt-1"
                  style={{ color: 'rgba(250,248,244,0.38)' }}
                >
                  Momente autentice din Centrul Educațional Fecioara Maria
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {['#F2C8B4', '#F3DDA0', '#BDD3BF', '#B3D8D7'].map((c, i) => (
                <div key={i} className="w-2 h-2 rounded-full" style={{ background: c, opacity: 0.55 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Magazine mosaic grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-3 md:gap-4" style={{ height: 'auto' }}>

          {/* Main wide image — top left, spans 7 cols, 1 row */}
          <div
            className={`col-span-12 md:col-span-7 row-span-1 group relative rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 ${visible ? 'animate-mosaicReveal' : 'opacity-0'}`}
            style={{
              height: 320,
              boxShadow: '0 16px 48px rgba(45,37,32,0.16)',
              animationDelay: '0ms',
            }}
          >
            <img
              src={mosaicImages[0].url}
              alt={mosaicImages[0].alt}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
              style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(45,37,32,0.65) 100%)' }}
            >
              <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif text-xl font-bold text-white">{mosaicImages[0].caption}</p>
                <div className="mt-2 w-8 h-0.5 bg-terra-200 rounded-full" />
              </div>
            </div>
          </div>

          {/* Tall portrait — top right, spans 5 cols, 2 rows */}
          <div
            className={`col-span-12 md:col-span-5 row-span-2 group relative rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 ${visible ? 'animate-mosaicReveal' : 'opacity-0'}`}
            style={{
              height: 660,
              boxShadow: '0 16px 48px rgba(45,37,32,0.14)',
              animationDelay: '100ms',
            }}
          >
            <img
              src={mosaicImages[1].url}
              alt={mosaicImages[1].alt}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
              style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(45,37,32,0.60) 100%)' }}
            >
              <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif text-xl font-bold text-white">{mosaicImages[1].caption}</p>
              </div>
            </div>
          </div>

          {/* Bottom left — 3 smaller images */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-3 md:gap-4" style={{ height: 320 }}>
            {mosaicImages.slice(2).map((img, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 ${visible ? 'animate-mosaicReveal' : 'opacity-0'}`}
                style={{
                  boxShadow: '0 8px 32px rgba(45,37,32,0.12)',
                  animationDelay: `${200 + i * 100}ms`,
                  height: '100%',
                }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(45,37,32,0.70) 100%)' }}
                >
                  <p className="font-body text-xs font-semibold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
