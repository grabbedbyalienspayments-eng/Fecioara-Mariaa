import { useEffect, useRef, useState, useCallback } from 'react';
import FeatherMotif from '../../../components/base/FeatherMotif';

interface TeamMember {
  name: string;
  role: string;
  color: string;
  icon: string;
  img: string;
  featured?: boolean;
  credentials?: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Lavinia Dumitrascu',
    role: 'Director',
    color: '#C96B45',
    icon: 'ri-user-star-fill',
    featured: true,
    img: '/images/team-lavinia-v5.webp',
    credentials: ['Sociologie-Psihologie', 'Master Psihoterapie', 'Pedagogie Prescolar'],
  },
  {
    name: 'Alina Manolache',
    role: 'Director Educațional',
    color: '#D4A041',
    icon: 'ri-book-open-fill',
    featured: true,
    img: '/images/team-alina-v5.webp',
    credentials: ['Gradul I Didactic', '15 ani experiență', 'Master Management Educațional'],
  },
  {
    name: 'Elena Ionita',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e1-v5.webp',
  },
  {
    name: 'Alina Alkhatib',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e2-v5.webp',
  },
  {
    name: 'Anca Pircalabescu',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e3-v5.webp',
  },
  {
    name: 'Violeta Sotir',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e4-v5.webp',
  },
  {
    name: 'Raluca Qazeem',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e5-v5.webp',
  },
  {
    name: 'Camelia Oancea',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e6-v5.webp',
  },
  {
    name: 'Alexandra Constantin',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e7-v5.webp',
  },
  {
    name: 'Miruna Mihaila',
    role: 'Educatoare',
    color: '#6B8B6E',
    icon: 'ri-seedling-fill',
    img: '/images/team-e8-v5.webp',
  },
  {
    name: 'Geanina Nicoleta Mutu',
    role: 'Profesor Limbă Germană',
    color: '#D4A041',
    icon: 'ri-translate-2',
    img: '/images/team-german-v5.webp',
  },
  {
    name: 'Simona Diaconescu',
    role: 'Profesor Limbă Engleză',
    color: '#4A9E9B',
    icon: 'ri-global-fill',
    img: '/images/team-english-v5.webp',
  },
  {
    name: 'Alexandra Marian',
    role: 'Profesor Muzică',
    color: '#C96B45',
    icon: 'ri-music-fill',
    img: '/images/team-music-v5.webp',
  },
  {
    name: 'Alina Petre',
    role: 'Instructor Dans',
    color: '#D95F52',
    icon: 'ri-dance-fill',
    img: '/images/team-dance-v5.webp',
  },
  {
    name: 'Dorina Stamate',
    role: 'Psiholog',
    color: '#6B8B6E',
    icon: 'ri-mental-health-fill',
    img: '/images/team-psych-v5.webp',
  },
  {
    name: 'Maria Dumitrascu',
    role: 'Director Comunicare',
    color: '#C96B45',
    icon: 'ri-megaphone-fill',
    img: '/images/team-comm-v5.webp',
  },
  {
    name: 'Ivona Spagnoli',
    role: 'Medic',
    color: '#D95F52',
    icon: 'ri-heart-pulse-fill',
    img: '/images/team-medic-v5.webp',
  },
  {
    name: 'Ani Georgescu',
    role: 'Asistentă Medicală',
    color: '#D95F52',
    icon: 'ri-nurse-fill',
    img: '/images/team-nurse-v5.webp',
  },
];

const programs = [
  {
    label: 'Program A',
    price: '2.350',
    currency: 'lei / lună',
    features: ['Program standard', 'Masă inclusă', 'Activități educative', 'Comunicare zilnică'],
    color: '#C96B45',
    bg: 'rgba(201,107,69,0.05)',
    border: 'rgba(201,107,69,0.18)',
  },
  {
    label: 'Program B',
    price: '2.750',
    currency: 'lei / lună',
    features: ['Program extins', 'Masă inclusă', 'Activități suplimentare', 'Raport săptămânal detaliat'],
    color: '#D4A041',
    bg: 'rgba(212,160,65,0.06)',
    border: 'rgba(212,160,65,0.22)',
    featured: true,
  },
];

const steps = [
  { nr: '1', label: 'Vizită', desc: 'Cunoașteți spațiul și echipa', icon: 'ri-map-pin-fill', color: '#C96B45' },
  { nr: '2', label: 'Documente', desc: 'Dosarul de înscriere', icon: 'ri-file-copy-fill', color: '#D4A041' },
  { nr: '3', label: 'Fișă de înscriere', desc: 'Completarea formularului', icon: 'ri-file-edit-fill', color: '#6B8B6E' },
  { nr: '4', label: 'Contract', desc: 'Semnare și confirmare', icon: 'ri-contract-fill', color: '#4A9E9B' },
];

const PER_PAGE = 4;

export default function EchipaInscriere() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(teamMembers.length / PER_PAGE);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = useCallback(() => setCurrentPage(p => Math.max(0, p - 1)), []);
  const next = useCallback(() => setCurrentPage(p => Math.min(totalPages - 1, p + 1)), [totalPages]);

  const visibleMembers = teamMembers.slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#FAF8F4' }}
    >
      {/* Rainbow wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" style={{ height: 55 }}>
        <svg viewBox="0 0 1440 55" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rwSep6e" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B3D8D7" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F2C8B4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F3DDA0" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,20 Q360,50 720,18 Q1080,-10 1440,22 L1440,55 L0,55 Z" fill="url(#rwSep6e)" />
          <path d="M0,32 Q360,55 720,30 Q1080,7 1440,34 L1440,55 L0,55 Z" fill="#FAF8F4" />
        </svg>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ── TEAM Section ─────────────────────────── */}
        <div className="mb-20 md:mb-28">

          {/* Header */}
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #C96B45, transparent)' }} />
                <span className="chapter-label">Oamenii din spatele centrului</span>
              </div>
              <h2
                className="font-serif text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: '#2D2520' }}
              >
                Echipa{' '}
                <em
                  style={{
                    fontStyle: 'italic',
                    background: 'linear-gradient(135deg, #C96B45, #D4A041)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  noastră
                </em>
              </h2>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-4">
              <span className="font-body text-sm" style={{ color: '#9A8A7F' }}>
                {currentPage + 1} / {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  disabled={currentPage === 0}
                  className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(242,233,221,0.9)',
                  }}
                  aria-label="Anterior"
                >
                  <i className="ri-arrow-left-s-line text-lg" style={{ color: '#2D2520' }} />
                </button>
                <button
                  onClick={next}
                  disabled={currentPage === totalPages - 1}
                  className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #C96B45, #D4A041)',
                  }}
                  aria-label="Următor"
                >
                  <i className="ri-arrow-right-s-line text-lg text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Slider cards */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
            style={{ transition: 'opacity 0.35s ease' }}
          >
            {visibleMembers.map((member, i) => (
              <div
                key={`${currentPage}-${i}`}
                className="group relative rounded-3xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'white',
                  border: member.featured ? `1.5px solid ${member.color}30` : '1px solid rgba(242,233,221,0.8)',
                  boxShadow: member.featured
                    ? `0 12px 40px ${member.color}16`
                    : '0 4px 20px rgba(45,37,32,0.06)',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {member.featured && (
                  <div
                    className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-body font-bold"
                    style={{ background: `${member.color}15`, color: member.color, border: `1px solid ${member.color}25` }}
                  >
                    Director
                  </div>
                )}

                {/* Photo */}
                <div className="relative w-full h-44 md:h-52 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(45,37,32,0.15) 100%)' }}
                  />
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className={`${member.icon} text-xs`} style={{ color: member.color }} />
                    <p className="font-body text-xs font-semibold" style={{ color: member.color }}>
                      {member.role}
                    </p>
                  </div>
                  <p className="font-serif text-sm md:text-base font-bold leading-snug" style={{ color: '#2D2520' }}>
                    {member.name}
                  </p>
                  {member.credentials && (
                    <div className="mt-2 space-y-0.5">
                      {member.credentials.map((c, ci) => (
                        <p key={ci} className="font-body text-[11px] leading-snug" style={{ color: '#9A8A7F' }}>
                          {c}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accent bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-7">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className="cursor-pointer transition-all duration-300 rounded-full"
                style={{
                  width: i === currentPage ? '24px' : '8px',
                  height: '8px',
                  background: i === currentPage
                    ? 'linear-gradient(90deg, #C96B45, #D4A041)'
                    : 'rgba(201,107,69,0.25)',
                }}
                aria-label={`Pagina ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── PRICING + ENROLLMENT ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Pricing */}
          <div className={`transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #D4A041, transparent)' }} />
              <span className="chapter-label">Taxe lunare</span>
            </div>
            <h3
              className="font-serif text-3xl md:text-4xl font-bold mb-7 leading-tight"
              style={{ color: '#2D2520' }}
            >
              Investiția în{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #D4A041, #C96B45)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                viitorul lui
              </em>
            </h3>
            <div className="space-y-4 mb-6">
              {programs.map((p, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: p.bg,
                    border: `1px solid ${p.border}`,
                    boxShadow: p.featured ? `0 8px 32px ${p.color}14` : 'none',
                  }}
                >
                  {p.featured && (
                    <div
                      className="absolute -top-3 left-5 px-3 py-0.5 rounded-full text-xs font-body font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${p.color}, #C96B45)` }}
                    >
                      Recomandat
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-serif text-xl font-bold" style={{ color: '#2D2520' }}>{p.label}</h4>
                    <div className="text-right">
                      <span className="font-serif text-3xl font-bold" style={{ color: p.color }}>{p.price}</span>
                      <span className="font-body text-sm ml-1" style={{ color: '#9A8A7F' }}>{p.currency}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <i className="ri-check-line text-sm" style={{ color: p.color }} />
                        <span className="font-body text-sm" style={{ color: '#5C4E44' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{ background: 'rgba(107,139,110,0.07)', border: '1px solid rgba(107,139,110,0.15)' }}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: 'white' }}>
                <i className="ri-percent-fill text-base" style={{ color: '#6B8B6E' }} />
              </div>
              <p className="font-body text-sm" style={{ color: '#4A3F36' }}>
                <strong style={{ color: '#2D2520' }}>Reducere 5%</strong> pentru al doilea copil din aceeași familie
              </p>
            </div>
          </div>

          {/* Enrollment */}
          <div className={`transition-all duration-900 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #6B8B6E, transparent)' }} />
              <span className="chapter-label">Pași simpli</span>
            </div>
            <h3
              className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: '#2D2520' }}
            >
              Cum mă înscriu?
            </h3>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: '#5C4E44' }}>
              De la prima vizită până la semnarea contractului — simplu, transparent, cu noi alături.
            </p>
            <div className="relative space-y-4 mb-8">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-xl text-white font-serif font-bold text-sm transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}CC)` }}
                    >
                      {s.nr}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-5 mt-1 rounded-full" style={{ background: `linear-gradient(180deg, ${s.color}50, transparent)` }} />
                    )}
                  </div>
                  <div
                    className="flex-1 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'white', border: '1px solid rgba(242,233,221,0.9)' }}
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: `${s.color}10` }}>
                      <i className={`${s.icon} text-base`} style={{ color: s.color }} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-sm md:text-base" style={{ color: '#2D2520' }}>{s.label}</p>
                      <p className="font-body text-xs" style={{ color: '#9A8A7F' }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="group w-full px-8 py-4 text-white font-body font-bold text-base rounded-2xl whitespace-nowrap cursor-pointer transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
              style={{
                background: 'linear-gradient(135deg, #C96B45 0%, #D4A041 100%)',
                boxShadow: '0 8px 28px rgba(201,107,69,0.28)',
              }}
            >
              <i className="ri-quill-pen-fill" />
              Programează o vizită
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <div className="flex justify-end mt-4 opacity-40">
              <FeatherMotif size="sm" color="text-honey-400" delay={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
