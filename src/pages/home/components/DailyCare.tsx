import { useEffect, useRef, useState } from 'react';

interface ScheduleItem {
  icon: string;
  label: string;
  note: string;
  color: string;
  phase: 'morning' | 'afternoon' | 'evening';
}

const schedule: ScheduleItem[] = [
  { icon: 'ri-door-open-fill', label: 'Primirea copiilor', note: 'Bun venit, fiecare în ritmul său', color: '#C96B45', phase: 'morning' },
  { icon: 'ri-run-fill', label: 'Gimnastică', note: 'Activare fizică, mișcare liberă', color: '#D4A041', phase: 'morning' },
  { icon: 'ri-cup-fill', label: 'Mic dejun', note: 'Masă liniștită, gătit cu grijă', color: '#6B8B6E', phase: 'morning' },
  { icon: 'ri-book-open-fill', label: 'Activități educaționale', note: 'Perioadă de lucru neîntrerupt Montessori', color: '#C96B45', phase: 'morning' },
  { icon: 'ri-global-fill', label: 'Engleză', note: 'Imersie bilingvă naturală', color: '#4A9E9B', phase: 'morning' },
  { icon: 'ri-plant-fill', label: 'Joacă exterior', note: 'Aer liber, natură, socializare liberă', color: '#6B8B6E', phase: 'morning' },
  { icon: 'ri-restaurant-2-fill', label: 'Prânz', note: 'Masă caldă, bucătărie proprie', color: '#D4A041', phase: 'afternoon' },
  { icon: 'ri-zzz-line', label: 'Odihnă', note: 'Siestă în mediu calm și pregătit', color: '#4A9E9B', phase: 'afternoon' },
  { icon: 'ri-apple-fill', label: 'Gustare', note: 'Fructe și legume proaspete', color: '#6B8B6E', phase: 'afternoon' },
  { icon: 'ri-gamepad-fill', label: 'Activități libere', note: 'Alegere independentă — principiu Montessori', color: '#C96B45', phase: 'evening' },
  { icon: 'ri-home-smile-2-fill', label: 'Preluare', note: 'Zi completă, amintiri frumoase', color: '#D4A041', phase: 'evening' },
];

const menuItems = [
  { icon: 'ri-close-circle-fill', label: 'Fără mezeluri de niciun fel', sub: 'Și fără carne de pui', color: '#D95F52', border: 'rgba(217,95,82,0.18)' },
  { icon: 'ri-restaurant-fill', label: 'Carne de curcan, vițel și pește', sub: 'Alimente naturale, surse curate', color: '#6B8B6E', border: 'rgba(107,139,110,0.18)' },
  { icon: 'ri-apple-fill', label: 'Fructe și legume proaspete zilnic', sub: 'Gustare de sezon, nesupraprocesat', color: '#6B8B6E', border: 'rgba(107,139,110,0.18)' },
  { icon: 'ri-cake-fill', label: 'Dulciuri preparate în casă', sub: 'Fără adaosuri artificiale, rețete proprii', color: '#D4A041', border: 'rgba(212,160,65,0.18)' },
];

const phases = [
  { key: 'morning', label: 'Dimineața', sub: 'Trezire · Muncă · Descoperire', icon: 'ri-sun-line', color: '#C96B45', bg: 'rgba(201,107,69,0.05)' },
  { key: 'afternoon', label: 'Prânz & Odihnă', sub: 'Hrănire · Repaus · Regenerare', icon: 'ri-moon-cloudy-line', color: '#4A9E9B', bg: 'rgba(74,158,155,0.05)' },
  { key: 'evening', label: 'După-amiaza', sub: 'Libertate · Joacă · Plecarea acasă', icon: 'ri-sunset-line', color: '#D4A041', bg: 'rgba(212,160,65,0.05)' },
];

export default function DailyCare() {
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

  return (
    <section
      id="program"
      className="relative overflow-hidden"
      style={{ background: '#FAF8F4' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-20 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,107,69,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(74,158,155,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">

        {/* ── Section Header ──────────────────────── */}
        <div className={`mb-14 md:mb-18 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #D4A041, transparent)' }} />
            <span className="chapter-label">Ritmul zilei</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#2D2520' }}
            >
              Programul{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #D4A041, #C96B45)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                zilnic
              </em>
            </h2>
            {/* Montessori badge */}
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-2xl self-start lg:self-auto"
              style={{ background: 'rgba(45,37,32,0.05)', border: '1px solid rgba(45,37,32,0.08)' }}
            >
              <div
                className="w-8 h-8 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: 'white' }}
              >
                <i className="ri-leaf-fill text-base" style={{ color: '#6B8B6E' }} />
              </div>
              <div>
                <p className="font-body font-bold text-xs" style={{ color: '#2D2520' }}>Inspirat de Metoda Montessori</p>
                <p className="font-body text-xs" style={{ color: '#9A8A7F' }}>Libertate în limite · Mediu pregătit</p>
              </div>
            </div>
          </div>
          <p className="font-body text-base leading-relaxed mt-5 max-w-2xl" style={{ color: '#5C4E44' }}>
            Ziua copilului urmează un ritm natural — perioade de muncă neîntreruptă, timp de odihnă generos și momente de alegere liberă, în spiritul educației Montessori.
          </p>
        </div>

        {/* ── 3-Phase Schedule ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {phases.map((phase) => {
            const items = schedule.filter(s => s.phase === phase.key);
            return (
              <div
                key={phase.key}
                className={`rounded-3xl overflow-hidden transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ background: 'white', border: '1px solid rgba(242,233,221,0.8)' }}
              >
                {/* Phase header */}
                <div
                  className="px-6 py-5 flex items-center gap-4"
                  style={{ background: phase.bg, borderBottom: '1px solid rgba(242,233,221,0.7)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: 'white' }}
                  >
                    <i className={`${phase.icon} text-xl`} style={{ color: phase.color }} />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-base" style={{ color: '#2D2520' }}>
                      {phase.label}
                    </p>
                    <p className="font-body text-xs" style={{ color: '#9A8A7F' }}>
                      {phase.sub}
                    </p>
                  </div>
                </div>

                {/* Phase items */}
                <div className="px-5 py-4 space-y-1">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`group flex items-start gap-3.5 py-2.5 px-1 rounded-xl transition-all duration-200 hover:bg-gray-50 cursor-default ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
                      style={{ animationDelay: `${200 + idx * 70}ms` }}
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                      >
                        <i className={`${item.icon} text-xs`} style={{ color: item.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="font-body font-semibold text-sm" style={{ color: '#2D2520' }}>
                          {item.label}
                        </p>
                        <p className="font-body text-xs leading-snug mt-0.5" style={{ color: '#9A8A7F' }}>
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Nutrition section ──────────────────── */}
        <div
          className={`rounded-3xl overflow-hidden transition-all duration-900 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'white', border: '1px solid rgba(242,233,221,0.8)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Food image */}
            <div className="relative h-64 lg:h-auto min-h-[260px]">
              <img
                src="/images/nutrition-v5.webp"
                alt="Meniu sănătos pentru copii"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(45,37,32,0.18) 100%)' }}
              />
              <div
                className="absolute top-5 left-5 px-4 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)' }}
              >
                <div className="flex items-center gap-2">
                  <i className="ri-restaurant-fill text-sm" style={{ color: '#6B8B6E' }} />
                  <span className="font-body font-bold text-sm" style={{ color: '#2D2520' }}>Bucătărie proprie</span>
                </div>
              </div>
            </div>

            {/* Menu items */}
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #6B8B6E, transparent)' }} />
                <span className="chapter-label">Alimentație sănătoasă</span>
              </div>
              <h3
                className="font-serif text-3xl md:text-4xl font-bold mb-3 leading-tight"
                style={{ color: '#2D2520' }}
              >
                Meniu{' '}
                <em
                  style={{
                    fontStyle: 'italic',
                    background: 'linear-gradient(135deg, #6B8B6E, #4A9E9B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  echilibrat
                </em>
              </h3>
              <p className="font-body text-sm md:text-base leading-relaxed mb-7" style={{ color: '#4A3F36' }}>
                Fiecare masă este pregătită cu grijă — dintr-o filosofie simplă: copiii merită mâncare adevărată, nealterată.
              </p>
              <div className="space-y-3">
                {menuItems.map((m, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3.5 p-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
                    style={{
                      background: `${m.color}07`,
                      border: `1px solid ${m.border}`,
                      animationDelay: `${400 + i * 80}ms`,
                    }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                      style={{ background: 'white' }}
                    >
                      <i className={`${m.icon} text-sm`} style={{ color: m.color }} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-sm" style={{ color: '#2D2520' }}>{m.label}</p>
                      <p className="font-body text-xs mt-0.5" style={{ color: '#7A6B60' }}>{m.sub}</p>
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
